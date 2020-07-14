import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View, Text, FlatList} from 'react-native';
import {
  DummyHeadline,
  DummyNews1,
  DummyNews2,
  DummyNews3,
  JSONLatestNews,
  JSONBeritaUtama,
} from '../../assets';
import {Ads, Header, Headline, NewsItem, Button} from '../../components';
import {colors, fonts} from '../../utils';
import Axios from 'axios';

const News = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [title, setTitle] = useState('Berita Terbaru');
  const [refreshing, setRefreshing] = useState(false);
  let count = 0;

  useEffect(() => {
    setRefreshing(true);
    getDataApi(70);
  }, []);

  const getDataApi = async (categories) => {
    let url = `https://manadopost.jawapos.com/wp-json/wp/v2/posts?per_page=50&categories=${categories}`;
    const response = await Axios.get(url);
    setNews(response.data);
    setRefreshing(false);
  };

  const renderItem = ({item}) => {
    count++;
    if (
      (title === 'Berita Terbaru' || title === 'Berita Utama') &&
      count === 1
    ) {
      return (
        <Headline
          image={{uri: item.jetpack_featured_media_url}}
          title={item.title.rendered}
          date={item.date}
          desc="MANADOPOST.ID—Kurang lebih sepuluh hari pasca banjir dan tanah longsor yang terjadi di Kabupaten Bolmong Selatan (Bolsel)."
        />
      );
    }
    return (
      <>
        <NewsItem
          key={item.id}
          image={{uri: item.jetpack_featured_media_url}}
          title={item.title.rendered}
          date={item.date}
        />
        {count % 5 === 0 && <Ads type="small-banner" />}
        {count % 9 === 0 && <Ads type="full-banner" />}
        {count % 12 === 0 && <Ads type="medium-banner" />}
      </>
    );
  };

  const onRefresh = () => {
    setRefreshing(true);
    getDataApi();
  };

  return (
    <View style={styles.screens}>
      <View style={styles.headerWrapper}>
        <Header title="Berita Terbaru" navigation={navigation} />
        <View style={styles.menu}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Button
              title="Berita Terbaru"
              onPress={() => {
                setRefreshing(true);
                getDataApi(70);
                setTitle('Berita Terbaru');
              }}
            />
            <Button
              title="Berita Utama"
              onPress={() => {
                setRefreshing(true);
                getDataApi(129);
                setTitle('Berita Utama');
              }}
            />
            <Button
              title="Eksibs"
              onPress={() => {
                setRefreshing(true);
                getDataApi(46);
                setTitle('Ekonomi & Bisnis');
              }}
            />
            <Button
              title="Polbub"
              onPress={() => {
                setRefreshing(true);
                getDataApi(47);
                setTitle('Politik & Publika');
              }}
            />
            <Button
              title="Nasional"
              onPress={() => {
                setRefreshing(true);
                getDataApi(130);
                setTitle('Nasional');
              }}
            />
          </ScrollView>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* <Headline
            image={DummyHeadline}
            title="Jokowi Perlu Komandan untuk Percepat 'Belanja' Corona"
            date="30 Juni 2020 09:15 am"
            desc="MANADOPOST.ID—Kurang lebih sepuluh hari pasca banjir dan tanah longsor yang terjadi di Kabupaten Bolmong Selatan (Bolsel)."
            onPress={() => navigation.navigate('Article')}
          /> */}

          <FlatList
            data={news}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
          {/* {news.map((item) => (
            <NewsItem
              key={item.id}
              image={{uri: item.jetpack_featured_media_url}}
              title={item.title.rendered}
              date={item.date}
            />
          ))} */}
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
