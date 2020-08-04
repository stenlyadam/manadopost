import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {ILGoogleMap} from '../../assets';
import {Gap, Title} from '../../components';
import {colors, fonts} from '../../utils';

const Explore360 = ({route}) => {
  const {title, data, category} = route.params;
  let location = data;
  if (category === 'Aerial') {
    location = data[0];
  }
  return (
    <View style={styles.screen}>
      <Title title={title} />
      <View style={styles.webViewWrapper}>
        <WebView
          source={{
            uri: location.link,
          }}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.desc}>
            <Text style={styles.text}>{location.description}</Text>
            <Gap height={10} />
            <View style={styles.address}>
              <Image source={ILGoogleMap} style={styles.imageAddress} />
              <Text style={styles.text}>{location.address}</Text>
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
    height: 400,
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
