import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconDigital,
  IconKawanua,
  IconNews,
  IconVideo,
  IconNewsActive,
  IconDigitalActive,
  IconKawanuaActive,
  IconVideoActive,
  IconKoranActive,
  IconKoran,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({label, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (label === 'MP News') {
      return active ? <IconNewsActive /> : <IconNews />;
    }
    if (label === 'MP Digital') {
      return active ? <IconDigitalActive /> : <IconDigital />;
    }
    if (label === 'MP 360') {
      return active ? <IconKawanuaActive /> : <IconKawanua />;
    }
    if (label === 'MP Video') {
      return active ? <IconVideoActive /> : <IconVideo />;
    }
    if (label === 'MP Koran') {
      return active ? <IconKoranActive /> : <IconKoran />;
    }
    return <IconNews />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(active)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: (active) => ({
    fontFamily: fonts.primary[600],
    fontSize: 12,
    color: active ? colors.white : colors.text.tertiary,
  }),
});
