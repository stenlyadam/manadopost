import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {IconMenu, IconSearch, IconArrowBack} from '../../../assets';

const IconOnly = ({icon, onPress}) => {
  const Icon = () => {
    if (icon === 'search') {
      return <IconSearch />;
    }
    if (icon === 'menu') {
      return <IconMenu />;
    }
    if (icon === 'arrow-back') {
      return <IconArrowBack />;
    }
    return <IconSearch />;
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
