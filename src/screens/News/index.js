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

    let filteredNews = newsArray.filter((el) => {
      return el !== undefined;
    });
    return filteredNews;
  };

  useEffect(() => {
    setRefreshing(true);
    Fire.database()
      .ref('ads/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          //Get ads by category
          let filteredAds = res.val().filter((el) => {
            return el.category === title && !el.article;
          });
          //Get article ads by the category
          let article = res.val().filter((el) => {
            return el.category === title && el.article;
          });

          console.log('filter ads, ', filteredAds);
          console.log('article ads, ', article);

          getNews(category).then((response) => {
            const mergedData = mergeNewsWithAds(response, filteredAds);
            // let count_ads = 0;
            // for (let i = 0; i < response.length; i++) {
            //   //Jika iklan lebih dari 10
            //   if (filteredAds.length > 10) {
            //     if (i % 2 === 0) {
            //       response.splice(i, 0, filteredAds[count_ads]);
            //       count_ads++;
            //     }
            //   }
            //   if (i % 5 === 0) {
            //     response.splice(i, 0, filteredAds[count_ads]);
            //     count_ads++;
            //   }
            // }
            // let filteredNews = mergedData.filter((el) => {
            //   return el !== undefined;
            // });

            //Set state
            setArticleAds(article);
            setNews(mergedData);
          });
        } else {
          getNews(category).then((response) => setNews(response));
        }
        setRefreshing(false);
      });
  }, []);

  const getNews = async (newsCategory) => {
    let url = `https://manadopost.jawapos.com/wp-json/wp/v2/posts?per_page=50&categories=${newsCategory}`;
    const response = await Axios.get(url);
    return response.data;
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
