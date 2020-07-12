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
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({label, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (label === 'News') {
      return active ? <IconNewsActive /> : <IconNews />;
    }
    if (label === 'Digital') {
      return active ? <IconDigitalActive /> : <IconDigital />;
    }
    if (label === 'Kawanua360') {
      return active ? <IconKawanuaActive /> : <IconKawanua />;
    }
    if (label === 'Video') {
      return active ? <IconVideoActive /> : <IconVideo />;
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
  },
  text: (active) => ({
    fontFamily: fonts.primary[600],
    fontSize: 14,
    color: active ? colors.text.secondary : colors.white,
  }),
});
