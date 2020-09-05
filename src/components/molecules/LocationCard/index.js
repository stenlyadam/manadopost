import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';

const index = ({onPress, title, thumbnail, fullWidth}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container(fullWidth)}>
      <Image source={{uri: thumbnail}} style={styles.thumbnail(fullWidth)} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  container: (fullWidth) => ({
    backgroundColor: colors.white,
    width: fullWidth ? '95%' : '25%',
    height: fullWidth ? 145 : 115,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 15,
  }),
  thumbnail: (fullWidth) => ({
    width: '100%',
    height: fullWidth ? 115 : 75,
    borderRadius: 15,
  }),
  text: {
    fontFamily: fonts.primary.normal,
    fontSize: 10,
    color: colors.text.primary,
    paddingVertical: 10,
    textAlign: 'center',
  },
});
