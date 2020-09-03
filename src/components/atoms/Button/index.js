import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';
import ButtonIcon from './ButtonIcon';
import ButtonIconText from './ButtonIconText';
import IconOnly from './IconOnly';
import {useSelector} from 'react-redux';

const Button = ({title, type, icon, onPress, price}) => {
  const isSubscribe = useSelector((state) => state.subscription);
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
    <TouchableOpacity onPress={onPress} style={styles.button(isSubscribe)}>
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
  button: (isSubscribe) => ({
    backgroundColor: isSubscribe
      ? colors.black
      : colors.button.primary.background,
    color: colors.button.primary.text,
    paddingHorizontal: 7,
    paddingVertical: 6,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
  }),
  subscribe: {
    backgroundColor: colors.button.tertiary.background,
    width: 90,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSubcribe: {
    fontFamily: fonts.primary.normal,
    fontSize: 12,
    color: colors.button.tertiary.text,
  },
});
