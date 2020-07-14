import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Header, Headline, NewsItem} from '../../components';
import Loading from '../../components/molecules/Loading';
import {colors, fonts, formatDate} from '../../utils';

const News = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [title, setTitle] = useState('Berita Terbaru');
  const [refreshing, setRefreshing] = useState(false);
  let count = 0;

  useEffect(() => {
    setRefreshing(true);
    getDataJSONFromAPI(70);
  }, []);

  const getDataJSONFromAPI = async (category) => {
    let url = `https://manadopost.jawapos.com/wp-json/wp/v2/posts?per_page=50&categories=${category}`;
    const response = await Axios.get(url);
    setNews(response.data);

    switch (category) {
      case 70:
        setTitle('Berita Terbaru');
        break;
      case 129:
        setTitle('Berita Utama');
        break;
      case 46:
        setTitle('Ekonomi & Bisnis');
        break;
      case 47:
        setTitle('Politik & Publika');
        break;
      case 130:
        setTitle('Nasional');
        break;
    }
    setRefreshing(false);
  };

  const onPressButton = (category) => {
    setRefreshing(true);
    getDataJSONFromAPI(category);
  };

  return (
    <View style={styles.screens}>
      <View style={styles.headerWrapper}>
        <Header title="Berita Terbaru" navigation={navigation} />
        <View style={styles.menu}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Button title="Berita Terbaru" onPress={() => onPressButton(70)} />
            <Button title="Berita Utama" onPress={() => onPressButton(129)} />
            <Button title="Ekbis" onPress={() => onPressButton(46)} />
            <Button title="Polbub" onPress={() => onPressButton(47)} />
            <Button title="Nasional" onPress={() => onPressButton(130)} />
          </ScrollView>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {news.map((item) => {
            count++;
            if (
              (title === 'Berita Terbaru' || title === 'Berita Utama') &&
              count === 1
            ) {
              return (
                <Headline
                  key={item.id}
                  image={{uri: item.jetpack_featured_media_url}}
                  title={item.title.rendered}
                  date={formatDate(item.date)}
                  desc={item.excerpt.rendered}
                />
              );
            }
            return (
              <NewsItem
                key={item.id}
                image={{uri: item.jetpack_featured_media_url}}
                title={item.title.rendered}
                date={formatDate(item.date)}
              />
            );
          })}
          {/* <NewsItem
            image={DummyNews1}
            title="Sudah 10 Hari Pasca Bencana, Warga Korban Banjir dan Longsor Tak Dapat Bantuan"
            date="30 Juni 2020 09:15 am"
          />
          <NewsItem
            image={DummyNews2}
            title="Virtual Reality menjadi masa depan Industri Indonesia"
            date="30 Juni 2020 09:15 am"
          />
          <Ads type="small-banner" />
          <NewsItem
            image={DummyNews3}
            title="Penghargaan dianugerahkan pada Media Online terbaik Indonesia"
            date="30 Juni 2020 09:15 am"
          />
          <Ads type="medium-banner" />
          <NewsItem
            image={DummyNews3}
            title="Penghargaan dianugerahkan pada Media Online terbaik Indonesia"
            date="30 Juni 2020 09:15 am"
          />
          <Ads type="full-banner" /> */}
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
