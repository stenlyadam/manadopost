import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts, getCategoryName} from '../../../utils';

const NewsItem = ({image, title, category, onPress, type}) => {
  if (type === 'no-image') {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          {/* <Text style={styles.date}>{date}</Text> */}
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {/* <Text style={styles.date}>{date}</Text> */}
        <View>
          <Text style={styles.rubrik}>{getCategoryName(category)}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  date: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    paddingVertical: 6,
  },
  rubrik: {
    color: colors.primary,
    fontFamily: fonts.primary[600],
    fontSize: 14,
  },
});
