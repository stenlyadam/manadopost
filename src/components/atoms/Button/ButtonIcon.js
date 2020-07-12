import React from 'react';
import {TouchableOpacity} from 'react-native';
import {IconFacebook, IconTwitter, IconWhatsapp} from '../../../assets';

const ButtonIcon = ({icon, onPress}) => {
  const Icon = () => {
    if (icon === 'facebook') {
      return <IconFacebook />;
    }
    if (icon === 'twitter') {
      return <IconTwitter />;
    }
    if (icon === 'whatsapp') {
      return <IconWhatsapp />;
    }
    return <IconFacebook />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default ButtonIcon;
