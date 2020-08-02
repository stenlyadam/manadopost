import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';
import ButtonIcon from './ButtonIcon';
import ButtonIconText from './ButtonIconText';
import IconOnly from './IconOnly';

const Button = ({title, type, icon, onPress, price}) => {
  if (type === 'button-icon') {
    return <ButtonIcon icon={icon} onPress={onPress} />;
  }
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (type === 'button-icon-text') {
    return <ButtonIconText onPress={onPress} title={title} />;
  }

  if (type === 'button-subscribe') {
    return (
      <TouchableOpacity onPress={onPress} style={styles.subscribe}>
        <Text style={styles.textSubcribe}>{title}</Text>
        <Text style={styles.textSubcribe}>{price}</Text>
      </TouchableOpacity>
    );
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
  subscribe: {
    backgroundColor: colors.button.tertiary.background,
    width: 115,
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSubcribe: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.button.tertiary.text,
  },
});
