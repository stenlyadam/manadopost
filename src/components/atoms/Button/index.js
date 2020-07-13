import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import ButtonIcon from './ButtonIcon';
import IconOnly from './IconOnly';
import {fonts, colors} from '../../../utils';

const Button = ({title, type, icon, onPress}) => {
  if (type === 'button-icon') {
    return <ButtonIcon icon={icon} onPress={onPress} />;
  }
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.white,
    paddingHorizontal: 10,
  },
});
