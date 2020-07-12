import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {
  Gap,
  Header,
  Headline,
  MenuHeader,
  Title,
  NewsItem,
  Ads,
} from '../../components';
import {colors} from '../../utils';
import {DummyHeadline, DummyNews1, DummyNews2, DummyNews3} from '../../assets';

const Latest = ({navigation}) => {
  return (
    <View style={styles.screens}>
      <View style={styles.headerWrapper}>
        <Header />
        <Gap height={2} />
        <MenuHeader />
      </View>
      <Title title="Berita Terbaru" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Headline
            image={DummyHeadline}
            title="Jokowi Perlu Komandan untuk Percepat 'Belanja' Corona"
            date="30 Juni 2020 09:15 am"
            desc="MANADOPOST.ID—Kurang lebih sepuluh hari pasca banjir dan tanah longsor yang terjadi di Kabupaten Bolmong Selatan (Bolsel)."
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
          <Ads type="full-banner" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Latest;

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
