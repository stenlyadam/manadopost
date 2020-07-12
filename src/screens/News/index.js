import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {DummyHeadline, DummyNews1, DummyNews2, DummyNews3} from '../../assets';
import {Ads, Header, Headline, NewsItem} from '../../components';
import {colors} from '../../utils';

const News = ({navigation}) => {
  return (
    <View style={styles.screens}>
      <View style={styles.headerWrapper}>
        <Header title="Berita Terbaru" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Headline
            image={DummyHeadline}
            title="Jokowi Perlu Komandan untuk Percepat 'Belanja' Corona"
            date="30 Juni 2020 09:15 am"
            desc="MANADOPOST.ID—Kurang lebih sepuluh hari pasca banjir dan tanah longsor yang terjadi di Kabupaten Bolmong Selatan (Bolsel)."
            onPress={() => navigation.navigate('Article')}
          />
          <NewsItem
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
          <Ads type="full-banner" />
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
});
