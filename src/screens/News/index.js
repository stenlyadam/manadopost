import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Ads, Button, Header, Headline, NewsItem, Title} from '../../components';
import Loading from '../../components/molecules/Loading';
import {colors, fonts, formatDate} from '../../utils';

const News = ({navigation, route}) => {
  const [news, setNews] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  let count = 0;
  const {category, title = 'Berita Terbaru'} = route.params;

  useEffect(() => {
    setRefreshing(true);
    getDataJSONFromAPI(category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDataJSONFromAPI = async (newsCategory) => {
    let url = `https://manadopost.jawapos.com/wp-json/wp/v2/posts?per_page=50&categories=${newsCategory}`;
    const response = await Axios.get(url);
    setNews(response.data);
    setRefreshing(false);
  };

  return (
    <View style={styles.screens}>
      <View style={styles.headerWrapper}>
        <Header
          title="Berita Terbaru"
          navigation={navigation}
          onPressMenu={() => navigation.openDrawer()}
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
          {news.map((item) => {
            count++;
            const data = {
              image: item.jetpack_featured_media_url,
              title: item.title.rendered,
              date: item.date,
              desc: item.excerpt.rendered,
              content: item.content.rendered,
              related: item['jetpack-related-posts'],
            };
            if (
              (title === 'Berita Terbaru' || title === 'Berita Utama') &&
              count === 1
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
              <View key={item.id}>
                <NewsItem
                  image={{uri: item.jetpack_featured_media_url}}
                  title={item.title.rendered}
                  date={formatDate(item.date)}
                  onPress={() => navigation.navigate('Article', data)}
                />
                {count % 5 === 0 && (
                  <Ads key={Math.random()} title={title} type="small-banner" />
                )}
                {count % 8 === 0 && (
                  <Ads key={Math.random()} title={title} type="medium-banner" />
                )}
                {count % 13 === 0 && (
                  <Ads key={Math.random()} title={title} type="full-banner" />
                )}
              </View>
            );
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
  content: {},
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
