import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors, fonts, getCategoryName} from '../../../utils';
import {WebView} from '../../atoms';

const Headline = ({image, title, date, desc, category, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <View>
          <Text style={styles.rubrik}>{getCategoryName(category)}</Text>
        </View>
        <WebView content={desc} />
      </TouchableOpacity>
    </View>
  );
};

export default Headline;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 10,
    flex: 1,
  },
  image: {
    height: 217,
    borderRadius: 14,
  },
  title: {
    paddingTop: 12,
    fontSize: 22,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: 380,
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
  rubrik: {
    color: colors.primary,
    fontFamily: fonts.primary[600],
    fontSize: 14,
  },
});
