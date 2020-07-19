import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ILButtonFacebook, ILButtonGoogle} from '../../../assets';

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
