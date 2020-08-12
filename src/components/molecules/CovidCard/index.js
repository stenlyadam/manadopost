import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../../utils';

const index = ({category, value, textColor}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{category}</Text>
        <Text style={styles.number(textColor)}>{value}</Text>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowRadius: 15,
    elevation: 3,
    shadowOffset: {width: 0, height: 2},
    width: 110,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.primary[600],
    fontSize: 12,
  },
  number: (textColor) => ({
    fontFamily: fonts.primary[800],
    fontSize: 20,
    color: textColor,
  }),
});
