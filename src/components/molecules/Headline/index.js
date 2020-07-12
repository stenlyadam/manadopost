import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';

const Headline = ({image, title, date, desc}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
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
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  date: {
    fontSize: 12,
    fontWeight: 'normal',
    color: colors.text.secondary,
    paddingVertical: 6,
  },
  desc: {
    paddingBottom: 6,
    color: colors.text.primary,
  },
});
