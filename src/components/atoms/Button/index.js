import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import ButtonIcon from './ButtonIcon';
import IconOnly from './IconOnly';

const Button = ({title, type, icon, onPress}) => {
  if (type === 'button-icon') {
    return <ButtonIcon icon={icon} onPress={onPress} />;
  }
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
