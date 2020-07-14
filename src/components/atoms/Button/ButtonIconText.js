import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {ILButtonFacebook, ILButtonGoogle} from '../../../assets';
import {colors} from '../../../utils';

const ButtonIconText = ({title, onPress}) => {
  const Icon = () => {
    if (title === 'Facebook') {
      return <ILButtonFacebook />;
    }
    if (title === 'Google') {
      return <ILButtonGoogle />;
    }
    return <ILButtonFacebook />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default ButtonIconText;
