import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {DummyArticle, DummyNews1, DummyNews2} from '../../assets';
import {Ads, Button, Header, NewsItem, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const Article = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Header
        title="Berita Terbaru"
        backButton
        onPressBack={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>
            Resmi Diumumkan Sony, Ini Dia Penampakan PlayStation 5
          </Text>
          <Text style={styles.date}>30 Juni 2020 09:15 am</Text>
          <View style={styles.shareButton}>
            <Button type="button-icon" icon="facebook" onPress={() => {}} />
            <Gap width={10} />
            <Button type="button-icon" icon="twitter" onPress={() => {}} />
            <Gap width={10} />
            <Button type="button-icon" icon="whatsapp" onPress={() => {}} />
          </View>
          <Image source={DummyArticle} style={styles.image} />
          <Text style={styles.desc}>
            MANADOPOST.ID – Nama Andi Amran Sulaiman masuk dalam survei tokoh
            nasional yang berpotensi kuat dalam kontestasi politik Indonesia ke
            depan. Mantan Menteri Pertanian era Kabinet Kerja Pertama ini bahkan
            merupakan satu-satunya tokoh politik asal Indonesia Timur yang masuk
            dalam daftar survei tersebut. Dalam survei ini, Andi Amran Sulaiman
            cukup menonjol dalam kategori sosok yang jujur, bersih, tegas, anti
            mafia serta memiliki kinerja yang baik di mata publik. Diketahui
            Survei Tokoh Alternatif Nasional ini menempatkan tokoh-tokoh
            politisi nasional yang memiliki persepsi baik di hadapan publik
            Indonesia serta mempunyai potensi untuk berkontestasi dalam
            pertarungan politik Indonesia ke depan. Survei yang diselenggarakan
            oleh Lembaga Survei KedaiKOPI (Kelompok Diskusi Kajian Opini Publik)
            menemukan faktor yang disukai masyarakat pada sosok Susi
            Pudjiastusti, Anies Baswedan, Ridwan Kamil, Tri Risma, Sri Mulyani,
            Andi Amran Sulaiman, Khofifah, Amran Sulaiman, dan Rizal Ramli. “Hal
            yang menarik dari hasil survei tokoh ini adalah tingginya tingkat
            kesukaan terhadap Susi Pudjiastuti yang merupakan Mantan Menteri
            Kelautan dan Perikanan pada periode pemerintahan Jokowi sebelumnya.
            Susi Pudjiastuti dipersepsikan n Menteri Pertanian sebagai
            satu-satunya tokoh yang berasal dari Indonesia Timur dan menjadi
            tokoh yang mewakili Indonesia Timur. Andi dipersepsikan publik
            memiliki kinerja baik (4,6%), walaupun dirinya kurang dikenal
            (2,4%),” tambah Kunto.
          </Text>
          <Text style={styles.subTitle}>Bagikan artikel ini</Text>
          <View style={styles.shareButton}>
            <Button type="button-icon" icon="facebook" onPress={() => {}} />
            <Gap width={10} />
            <Button type="button-icon" icon="twitter" onPress={() => {}} />
            <Gap width={10} />
            <Button type="button-icon" icon="whatsapp" onPress={() => {}} />
          </View>
          <Ads type="small-banner" />
          <Text style={styles.subTitle}>Artikel Terkait</Text>
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
        </View>
      </ScrollView>
    </View>
  );
};

export default Article;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerWrapper: {
    backgroundColor: colors.secondary,
  },
  content: {
    padding: 10,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 22,
    color: colors.text.primary,
  },
  date: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.text.secondary,
  },
  shareButton: {
    flexDirection: 'row',
    marginVertical: 3,
  },
  image: {
    width: '100%',
    height: 260,
    borderRadius: 14,
    marginBottom: 10,
  },
  desc: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.text.primary,
  },
  subTitle: {
    fontFamily: fonts.primary[600],
    fontSize: 18,
    color: colors.text.primary,
    marginVertical: 5,
  },
});
