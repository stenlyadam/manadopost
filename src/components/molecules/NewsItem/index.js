import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';

const NewsItem = ({image, title, date}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  image: {
    width: 150,
    height: 130,
    borderRadius: 14,
  },
  content: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  date: {
    fontSize: 12,
    fontWeight: 'normal',
    color: colors.text.secondary,
    paddingVertical: 6,
  },
});
