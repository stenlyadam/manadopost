import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconDigitalActive,
  IconDigitalGrey,
  IconKawanuaActive,
  IconKawanuaGrey,
  IconKoranActive,
  IconKoranGrey,
  IconNews,
  IconNewsActive,
  IconNewsGrey,
  IconVideoActive,
  IconVideoGrey,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({label, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (label === 'MP News') {
      return active ? <IconNewsActive /> : <IconNewsGrey />;
    }
    if (label === 'MP Digital') {
      return active ? <IconDigitalActive /> : <IconDigitalGrey />;
    }
    if (label === 'MP 360') {
      return active ? <IconKawanuaActive /> : <IconKawanuaGrey />;
    }
    if (label === 'MP Video') {
      return active ? <IconVideoActive /> : <IconVideoGrey />;
    }
    if (label === 'MP Koran') {
      return active ? <IconKoranActive /> : <IconKoranGrey />;
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
    color: active ? colors.white : colors.tertiary,
  }),
});
