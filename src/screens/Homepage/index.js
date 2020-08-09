/* eslint-disable react-hooks/exhaustive-deps */
import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {
  Ads,
  Header,
  Headline,
  Loading,
  Menu,
  NewsItem,
  Title,
} from '../../components';
import Fire from '../../config/Fire';
import {colors, fonts, formatDate} from '../../utils';

const Homepage = ({navigation, route}) => {
  const [news, setNews] = useState([]);
  const [headlines, setHeadlines] = useState([]);
  const [articleAds, setArticleAds] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const {category, title = 'Beranda'} = route.params;

  const mergeNewsWithAds = (newsArray, adsArray) => {
    let count = 0;

    for (let i = 0; i < newsArray.length; i++) {
      if (i % 3 === 0) {
        //max ads 33
        if (count === adsArray.length) {
          break;
        }
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

  const getHeadlines = async (newsCategory) => {
    let url = `https://manadopost.jawapos.com/wp-json/wp/v2/posts?per_page=7&categories=${newsCategory}`;
    const response = await Axios.get(url);
    return response.data;
  };

  const getNews = async () => {
    let url = 'https://manadopost.jawapos.com/wp-json/wp/v2/posts?per_page=100';
    const response = await Axios.get(url);
    return response.data;
  };

  const getAds = async () => {
    const data = await Fire.database().ref('ads/').once('value');
    if (data.val()) {
      let filteredAds = data.val().filter((el) => {
        return el.category === title && !el.article;
      });
      return filteredAds;
    }
    return data.val();
  };

  const getArticleAds = async () => {
    const data = await Fire.database().ref('ads/').once('value');
    if (data.val()) {
      let article = data.val().filter((el) => {
        return el.category === title && el.article;
      });
      return article;
    }
    return data.val();
  };

  const getAllFilteredData = async () => {
    const resHeadlines = await getHeadlines(category);
    const resNews = await getNews();
    const resAds = await getAds();
    const mergedData = mergeNewsWithAds(resNews, resAds);
    const resArticle = await getArticleAds();
    return [mergedData, resArticle, resHeadlines];
  };

  useEffect(() => {
    let mounted = true;
    setRefreshing(true);
    getAllFilteredData().then(([newsData, articlesData, headlinesData]) => {
      if (mounted) {
        setNews(newsData);
        setArticleAds(articlesData);
        setHeadlines(headlinesData);
        setRefreshing(false);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    getAllFilteredData().then(([newsData, articlesData, headlinesData]) => {
      setNews(newsData);
      setArticleAds(articlesData);
      setHeadlines(headlinesData);
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
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {!refreshing && (
          <Title title="Berita Utama" refresh onPress={onRefresh} />
        )}
        <Swiper
          style={styles.headlineWrapper}
          height={'60%'}
          showsButtons={true}>
          {headlines.map((item) => {
            const data = {
              image: item.jetpack_featured_media_url,
              title: item.title.rendered,
              date: item.date,
              desc: item.excerpt.rendered,
              content: item.content.rendered,
              related: item['jetpack-related-posts'],
              link: item.link,
              ads: articleAds,
            };
            return (
              <View key={item.id}>
                <Headline
                  image={{uri: data.image}}
                  title={data.title}
                  date={formatDate(data.date)}
                  onPress={() => navigation.navigate('Article', data)}
                />
              </View>
            );
          })}
        </Swiper>

        {!refreshing && <Title title="Berita Terbaru" secondary />}

        <View>
          {news.map((item, index) => {
            //Kondisi jika akan menampilkan iklan
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
                ads: articleAds,
              };
              return (
                <NewsItem
                  key={item.id}
                  image={{uri: item.jetpack_featured_media_url}}
                  title={item.title.rendered}
                  date={formatDate(item.date)}
                  ads={data.ads}
                  category={item.categories[0]}
                  onPress={() => navigation.navigate('Article', data)}
                />
              );
            }
          })}
        </View>
      </ScrollView>
      {refreshing && <Loading />}
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },

  screens: {
    backgroundColor: colors.white,
    flex: 1,
  },
  headerWrapper: {
    backgroundColor: colors.secondary,
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
  headline: {
    flexDirection: 'row',
  },
});
