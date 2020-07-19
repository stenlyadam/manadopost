import Moment from 'moment';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';
import {DummyNews1, DummyNews2} from '../../assets';
import {Ads, Button, Gap, NewsItem} from '../../components';
import {colors, fonts} from '../../utils';

const Article = ({navigation, route}) => {
  const {image, title, date, content, related} = route.params;
  console.log(related);
  return (
    <View style={styles.screen}>
      {/* <Header backButton onPressBack={() => navigation.goBack()} /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Ads type="small-banner" />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{Moment(date).format('LLLL')}</Text>
          <View style={styles.shareButton}>
            <Button type="button-icon" icon="facebook" onPress={() => {}} />
            <Gap width={10} />
            <Button type="button-icon" icon="twitter" onPress={() => {}} />
            <Gap width={10} />
            <Button type="button-icon" icon="whatsapp" onPress={() => {}} />
          </View>
          <Image source={{uri: image}} style={styles.image} />
          <AutoHeightWebView
            style={styles.webView}
            source={{html: content}}
            scrollEnabled={false}
            scalesPageToFit={true}
            viewportContent={'width=device-width, user-scalable=no'}
            customStyle={`
              p {
                font-size: 14px;
              }
            `}
          />
          <Text style={styles.subTitle}>Bagikan artikel ini</Text>
          <View style={styles.shareButton}>
            <Button type="button-icon" icon="facebook" onPress={() => {}} />
            <Gap width={10} />
            <Button type="button-icon" icon="twitter" onPress={() => {}} />
            <Gap width={10} />
            <Button type="button-icon" icon="whatsapp" onPress={() => {}} />
          </View>
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
  webView: {
    width: '100%',
    marginTop: 5,
  },
});
