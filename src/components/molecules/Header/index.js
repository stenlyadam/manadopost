import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ICMenu, ICSearch, ILLogo} from '../../../assets';
import {colors} from '../../../utils';

const Header = () => {
  return (
    <View style={styles.container}>
      <ICMenu />
      <ILLogo />
      <ICSearch />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
