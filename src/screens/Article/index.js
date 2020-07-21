import Moment from 'moment';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Share from 'react-native-share';
import {DummyNews1, DummyNews2} from '../../assets';
import {Ads, Header, NewsItem, WebView} from '../../components';
import {colors, fonts} from '../../utils';
import {showMessage} from 'react-native-flash-message';

const Article = ({route, navigation}) => {
  const {image, title, date, content, related, link} = route.params;

  const shareArticle = () => {
    const shareOptions = {
      title: title,
      message: title,
      url: link,
    };

    Share.open(shareOptions).catch((error) =>
      showMessage({
        message: 'Oops, sepertinya anda tidak membagikan artikel ini',
        type: 'default',
        backgroundColor: colors.error,
        color: colors.white,
      }),
    );
  };

  return (
    <View style={styles.screen}>
      <Header
        type="article"
        onPressBack={() => navigation.goBack()}
        onPressShare={shareArticle}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Ads type="small-banner" />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{Moment(date).format('LLLL')}</Text>

          <Image source={{uri: image}} style={styles.image} />
          <WebView content={content} />
          <Text style={styles.subTitle}>Bagikan artikel ini</Text>

          <Ads type="medium-banner" />
          {related && (
            <>
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
            </>
          )}
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
