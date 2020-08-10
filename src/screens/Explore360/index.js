import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {ILGoogleMap} from '../../assets';
import {Gap, Header} from '../../components';
import {colors, fonts, showError} from '../../utils';
import Share from 'react-native-share';

const Explore360 = ({route, navigation}) => {
  const {title, data} = route.params;
  const linkMP =
    'https://play.google.com/store/apps/details?id=com.manadopost.manadopost';
  const shareLocation = () => {
    const shareOptions = {
      title: `${title} (${data.site_name})`,
      message: `${title} (${data.site_name})`,
      url: `${data.link_360}. Download aplikasi berita paling lengkap se-Sulut 🤩👉 ${linkMP}`,
    };

    Share.open(shareOptions).catch((error) =>
      showError('Share lokasi dibatalkan'),
    );
  };

  return (
    <View style={styles.screen}>
      <Header
        type="article"
        onPressBack={() => navigation.goBack()}
        onPressShare={shareLocation}
      />
      <View style={styles.webViewWrapper}>
        <WebView
          source={{
            uri: data.link_360,
          }}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.desc}>
            <Text style={styles.text}>{data.description}</Text>
            <Gap height={10} />
            <View style={styles.address}>
              <Image source={ILGoogleMap} style={styles.imageAddress} />
              <Text style={styles.text}>{data.address}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Explore360;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  webViewWrapper: {
    height: '70%',
  },
  content: {
    flex: 1,
    paddingBottom: 20,
  },
  webView: {
    flex: 3,
  },
  desc: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    fontSize: 14,
    textAlign: 'justify',
    flex: 1,
  },
  address: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageAddress: {
    marginRight: 10,
  },
});
