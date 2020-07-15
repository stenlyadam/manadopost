import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ILLogo} from '../../../assets';
import {colors} from '../../../utils';
import {Button, Gap} from '../../atoms';

const Header = ({backButton, onPressBack, onPressMenu, onPressSearch}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        {!backButton && (
          <Button type="icon-only" icon="menu" onPress={onPressMenu} />
        )}
        {backButton && (
          <Button type="icon-only" icon="arrow-back" onPress={onPressBack} />
        )}
        <ILLogo />
        <Button type="icon-only" icon="search" onPress={onPressSearch} />
      </View>
      <Gap height={2} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
  },
  logo: {
    backgroundColor: colors.primary,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});
