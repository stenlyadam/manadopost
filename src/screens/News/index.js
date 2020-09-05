/* eslint-disable react-hooks/exhaustive-deps */
import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Ads, Header, Menu, NewsItem, Title} from '../../components';
import {
  colors,
  fonts,
  formatDate,
  getData,
  storeData,
  checkExpireDate,
} from '../../utils';
import {Fire} from '../../config';
import {useDispatch, useSelector} from 'react-redux';

const News = ({navigation, route}) => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.login);
  const [news, setNews] = useState([]);
  const [articleAds, setArticleAds] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const {category, title = 'Beranda'} = route.params;

  const mergeNewsWithAds = (newsArray, adsArray) => {
    let count = 0;
    for (let i = 0; i < newsArray.length; i++) {
      if (i % 3 === 0) {
        //max ads 33
        newsArray.splice(i, 0, adsArray[count]);
        count++;
      }
    }
    //Remove undefined
    let filteredData = newsArray.filter((el) => {
      return el !== undefined;
    });
    return filteredData;
  };

  const getNews = async (newsCategory) => {
    let url = `https://manadopost.jawapos.com/wp-json/wp/v2/posts?per_page=100&categories=${newsCategory}`;
    const response = await Axios.get(url);
    return response.data;
  };

  const getAds = async () => {
    let url = 'http://api.mpdigital.id/ads';
    const response = await Axios.get(url);
    if (response.data) {
      let filteredAds = response.data.filter((el) => {
        if (el.isActive === '1') {
          return el.category === title && el.article === '0';
        }
      });
      return filteredAds;
    }
    return response.data;
  };

  const getArticleAds = async () => {
    let url = 'http://api.mpdigital.id/ads';
    const response = await Axios.get(url);
    if (response.data) {
      let filteredAds = response.data.filter((el) => {
        if (el.isActive === '1') {
          return el.category === title && el.article === '1';
        }
      });
      return filteredAds;
    }
    return response.data;
  };

  const getAllFilteredData = async () => {
    const resNews = await getNews(category);
    const resAds = await getAds();
    const mergedData = mergeNewsWithAds(resNews, resAds);
    const resArticle = await getArticleAds();
    storeData(`news ${title}`, mergedData);
    return [mergedData, resArticle];
  };

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      onRefresh();
    }
    return () => {
      mounted = false;
    };
  }, []);

  const renderItem = ({item}) => {
    if (item.category) {
      return (
        <Ads
          key={item.id}
          title={item.category}
          image={{uri: item.image}}
          type={item.type}
        />
      );
    } else {
      //Kondisi jika akan menampilkan berita
      const data = {
        image: item.jetpack_featured_media_url,
        title: item.title.rendered,
        date: item.date,
        desc: item.excerpt.rendered,
        content: item.content.rendered,
        related: item['jetpack-related-posts'],
        link: item.link,
        category: item.categories[0],
        ads: articleAds,
        featuredMedia: item.featured_media,
      };
      return (
        <NewsItem
          key={item.id}
          image={{uri: item.jetpack_featured_media_url}}
          title={item.title.rendered}
          date={formatDate(item.date)}
          ads={data.ads}
          onPress={() => navigation.navigate('Article', data)}
        />
      );
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    //Check Expire Date
    getData('user').then((res) => {
      Fire.database()
        .ref('users/')
        .orderByChild('uid')
        .equalTo(res.uid)
        .once('value')
        .then((user) => {
          //Get user data and Convert object to array
          const userArr = Object.values(user.val());
          const isExpire = checkExpireDate(userArr[0]);
          if (isExpire) {
            dispatch({type: 'SET_SUBSCRIPTION', value: false});
          } else {
            if (isLogin) {
              dispatch({type: 'SET_SUBSCRIPTION', value: true});
            }
          }
        });
    });
    getAllFilteredData().then(([newsData, articlesData]) => {
      // getData(`news ${title}`).then((localStorage) => {
      //   setNews(localStorage);
      //   setArticleAds(articlesData);
      //   setRefreshing(false);
      // });
      setNews(newsData);
      setArticleAds(articlesData);
      setRefreshing(false);
    });
  };

  return (
    <View style={styles.screens}>
      <View style={styles.headerWrapper}>
        <Header
          onPressMenu={() => navigation.openDrawer()}
          onPressSearch={() =>
            navigation.navigate('Search', {category: category, title: title})
          }
        />
        <Menu navigation={navigation} />
        <Title title={title} />
      </View>

      <FlatList
        data={news}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  screens: {
    backgroundColor: colors.white,
    flex: 1,
  },
  headerWrapper: {
    backgroundColor: colors.secondary,
  },
  menu: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 51,
  },
  title: {
    backgroundColor: colors.tertiary,
    paddingLeft: 12,
    paddingVertical: 7,
  },
  titleText: {
    color: colors.white,
    textTransform: 'uppercase',
    fontSize: 16,
    fontFamily: fonts.primary[600],
  },
});
