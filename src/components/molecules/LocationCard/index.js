import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';

const index = ({onPress, title, thumbnail}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{uri: thumbnail}} style={styles.thumbnail} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: 110,
    height: 113,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  thumbnail: {
    width: 103,
    height: 75,
    borderRadius: 15,
  },
  text: {
    fontFamily: fonts.primary.normal,
    fontSize: 10,
    color: colors.text.primary,
    paddingVertical: 10,
    textAlign: 'center',
  },
});
