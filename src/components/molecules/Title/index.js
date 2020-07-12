import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';

const Title = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.greyBackground1,
    paddingLeft: 12,
    paddingVertical: 7,
  },
  text: {
    color: colors.white,
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
