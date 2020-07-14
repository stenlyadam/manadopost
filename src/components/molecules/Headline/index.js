import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors, fonts} from '../../../utils';

const Headline = ({image, title, date, desc, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <AutoHeightWebView
        style={styles.webView}
        source={{html: desc}}
        scrollEnabled={false}
        customStyle={`
        p {
          font-size: 14px;
        }
      `}
      />
    </TouchableOpacity>
  );
};

export default Headline;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 217,
    borderRadius: 14,
  },
  title: {
    paddingTop: 12,
    fontSize: 22,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  date: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    paddingVertical: 6,
  },
  desc: {
    paddingBottom: 6,
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.text.primary,
  },
  webView: {
    width: '100%',
    marginTop: 5,
  },
});
