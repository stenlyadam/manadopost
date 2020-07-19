import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts, colors} from '../../../utils';

const index = ({title}) => {
  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  title: {
    backgroundColor: colors.tertiary,
    paddingLeft: 12,
    paddingVertical: 7,
  },
  titleText: {
    color: colors.white,
    textTransform: 'uppercase',
    fontSize: 16,
    fontFamily: fonts.primary[600],
  },
});
