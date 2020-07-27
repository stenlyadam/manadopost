import Moment from 'moment';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import Share from 'react-native-share';
import {Header, WebView, Ads} from '../../components';
import {colors, fonts} from '../../utils';

const Article = ({route, navigation}) => {
  const {image, title, date, content, link, ads} = route.params;
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
          {ads.map((item, index) => {
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
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{Moment(date).format('LLLL')}</Text>
          <Image source={{uri: image}} style={styles.image} />
          <WebView content={content} />
          {ads.map((item, index) => {
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
