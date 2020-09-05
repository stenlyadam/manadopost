import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const MagazineCard = ({image, date, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.dateText}>{date}</Text>
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} />
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.textButton}>Buka</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default MagazineCard;

const styles = StyleSheet.create({
  container: {
    width: 167,
    height: 222,
    borderColor: colors.border,
    borderWidth: 1,
    backgroundColor: colors.cardBackground,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowRadius: 10,
    elevation: 3,
    shadowOffset: {width: 0, height: 2},
    marginTop: 15,
  },

  dateText: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.tertiary,
  },
  imageWrapper: {
    alignItems: 'center',
  },
  image: {
    width: 114,
    height: 164,
    marginVertical: 5,
  },
  button: {
    backgroundColor: colors.tertiary,
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
