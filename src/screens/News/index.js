/* eslint-disable react-hooks/exhaustive-deps */
import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  Ads,
  Button,
  Header,
  Headline,
  Loading,
  NewsItem,
  Title,
} from '../../components';
import Fire from '../../config/Fire';
import {colors, fonts, formatDate} from '../../utils';

const News = ({navigation, route}) => {
  const [news, setNews] = useState([]);
  const [articleAds, setArticleAds] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const {category, title = 'Berita Terbaru'} = route.params;

  const mergeNewsWithAds = (newsArray, adsArray) => {
    let count = 0;
    for (let i = 0; i < newsArray.length; i++) {
      //Jika iklan lebih dari 10
      if (adsArray.length > 10) {
        if (i % 2 === 0) {
          newsArray.splice(i, 0, adsArray[count]);
        }
      }
      if (i % 5 === 0) {
        newsArray.splice(i, 0, adsArray[count]);
      }
      count++;
    }
    //Remove undefined
    let filteredData = newsArray.filter((el) => {
      return el !== undefined;
    });
    return filteredData;
  };

  const getNews = async (newsCategory) => {
    let url = `https://manadopost.jawapos.com/wp-json/wp/v2/posts?per_page=50&categories=${newsCategory}`;
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

  useEffect(() => {
    let mounted = true;
    setRefreshing(true);
    getAds().then((resAds) => {
      getNews(category).then((resNews) => {
        const mergedData = mergeNewsWithAds(resNews, resAds);
        if (mounted) {
          setNews(mergedData);
          getArticleAds().then((resArticleAds) => {
            setArticleAds(resArticleAds);
          });
        }
      });
    });
    setRefreshing(false);
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <View style={styles.screens}>
      <View style={styles.headerWrapper}>
        <Header
          onPressMenu={() => navigation.openDrawer()}
          onPressSearch={() =>
            navigation.navigate('Search', {category: category, title: title})
          }
        />
        <View style={styles.menu}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Button
              title="Berita Terbaru"
              onPress={() => navigation.navigate('BeritaTerbaru')}
            />
            <Button
              title="Berita Utama"
              onPress={() => navigation.navigate('BeritaUtama')}
            />
            <Button
              title="Ekbis"
              onPress={() => navigation.navigate('Ekbis')}
            />
            <Button
              title="Polbub"
              onPress={() => navigation.navigate('Polbub')}
            />
            <Button
              title="Nasional"
              onPress={() => navigation.navigate('Nasional')}
            />
          </ScrollView>
        </View>
        <Title title={title} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {news.map((item, index) => {
            //Kondisi jika akan menampilkan iklan
            if (index % 5 === 0) {
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
              if (
                (title === 'Berita Terbaru' || title === 'Berita Utama') &&
                index === 1
              ) {
                return (
                  <Headline
                    key={item.id}
                    image={{uri: data.image}}
                    title={data.title}
                    date={formatDate(data.date)}
                    desc={data.desc}
                    onPress={() => navigation.navigate('Article', data)}
                  />
                );
              }
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
          })}
        </View>
      </ScrollView>
      {refreshing && <Loading />}
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
