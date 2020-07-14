import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import ButtonIcon from './ButtonIcon';
import IconOnly from './IconOnly';
import {fonts, colors} from '../../../utils';
import ButtonIconText from './ButtonIconText';

const Button = ({title, type, icon, onPress}) => {
  if (type === 'button-icon') {
    return <ButtonIcon icon={icon} onPress={onPress} />;
  }
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (type === 'button-icon-text') {
    return <ButtonIconText onPress={onPress} title={title} />;
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
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
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.button.primary.background,
    color: colors.button.primary.text,
    paddingHorizontal: 7,
    paddingVertical: 6,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
  },
});
