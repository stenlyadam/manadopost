import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
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
        return <ILAerialView />;
      case 'rekreasi':
        return <ILRekreasi />;
      case 'hotel':
        return <ILHotel />;
      case 'shop':
        return <ILShop />;
      case 'sport':
        return <ILSport />;
      case 'budaya':
        return <ILBudaya />;
      default:
        return <ILAerialView />;
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
});
