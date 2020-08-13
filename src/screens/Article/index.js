import Moment from 'moment';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Share from 'react-native-share';
import {Ads, Header, WebView} from '../../components';
import {colors, fonts, showError, getCategoryName} from '../../utils';

const Article = ({route, navigation}) => {
  const {image, title, date, content, link, ads, category} = route.params;
  const shareArticle = () => {
    const linkMP =
      'https://play.google.com/store/apps/details?id=com.mp.manadopost';
    const shareOptions = {
      title: title,
      message: title,
      url: `${link}. Download aplikasi berita paling lengkap se-Sulut 🤩👉 ${linkMP}`,
    };

    Share.open(shareOptions).catch((error) =>
      showError('Share artikel dibatalkan'),
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
          <View style={styles.adsWrapper}>
            {ads &&
              ads.map((item, index) => {
                if (index === 0) {
                  return (
                    <Ads
                      key={item.id}
                      title={item.category}
                      image={{uri: item.image}}
                      type={item.type}
                    />
                  );
                }
              })}
          </View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.rubrik}>{getCategoryName(category)}</Text>
          <Text style={styles.date}>{Moment(date).format('LLLL')}</Text>
          <Image source={{uri: image}} style={styles.image} />
          <WebView content={content} />
          <View style={styles.adsWrapper}>
            {ads &&
              ads.map((item, index) => {
                if (index > 0) {
                  return (
                    <Ads
                      key={item.id}
                      title={item.category}
                      image={{uri: item.image}}
                      type={item.type}
                    />
                  );
                }
              })}
          </View>
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
  adsWrapper: {
    marginHorizontal: -10,
  },
  headerWrapper: {
    backgroundColor: colors.secondary,
  },
  content: {
    padding: 10,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 24,
    color: colors.text.primary,
  },
  date: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.text.secondary,
    paddingBottom: 5,
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
  rubrik: {
    color: colors.primary,
    fontFamily: fonts.primary[600],
    fontSize: 14,
  },
});
