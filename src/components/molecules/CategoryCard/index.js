import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {
  ILAerialView,
  ILBudaya,
  ILHotel,
  ILRekreasi,
  ILShop,
  ILSport,
} from '../../../assets';
import {colors, fonts} from '../../../utils';
const index = ({title, type, onPress}) => {
  const Icon = () => {
    switch (type) {
      case 'aerial':
        return <Image source={ILAerialView} style={styles.image} />;
      case 'rekreasi':
        return <Image source={ILRekreasi} style={styles.image} />;
      case 'hotel':
        return <Image source={ILHotel} style={styles.image} />;
      case 'shop':
        return <Image source={ILShop} style={styles.image} />;
      case 'sport':
        return <Image source={ILSport} style={styles.image} />;
      case 'budaya':
        return <Image source={ILBudaya} style={styles.image} />;
      default:
        return <Image source={ILAerialView} style={styles.image} />;
    }
  };

  const getColor = () => {
    switch (type) {
      case 'aerial':
        return colors.kawanua.aerial.background;
      case 'rekreasi':
        return colors.kawanua.rekreasi.background;
      case 'hotel':
        return colors.kawanua.hotel.background;
      case 'shop':
        return colors.kawanua.shop.background;
      case 'sport':
        return colors.kawanua.sport.background;
      case 'budaya':
        return colors.kawanua.budaya.background;
      default:
        return colors.kawanua.rekreasi.background;
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container(getColor())}>
      <Icon />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type,
    width: 117,
    height: 135,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 15,
  }),
  text: {
    fontFamily: fonts.primary[700],
    fontSize: 12,
    color: colors.kawanua.aerial.text,
    paddingBottom: 20,
  },
  image: {
    height: 100,
    width: 100,
  },
});
