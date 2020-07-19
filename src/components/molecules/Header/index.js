import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {ILLogo, ILNullPhotoGrey} from '../../../assets';
import {colors} from '../../../utils';
import {Button, Gap} from '../../atoms';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Header = ({
  backButton,
  onPressBack,
  onPressMenu,
  onPressSearch,
  onPressUserProfile,
  type,
}) => {
  if (type === 'logo-only') {
    return (
      <View style={styles.container}>
        <View style={styles.logoOnly}>
          <View style={styles.logoWrapper}>
            <ILLogo />
          </View>
          <TouchableOpacity onPress={onPressUserProfile}>
            <Image source={ILNullPhotoGrey} style={styles.nullPhoto} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
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
  logoOnly: {
    backgroundColor: colors.primary,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  nullPhoto: {
    height: 32,
    width: 32,
    borderRadius: 42 / 2,
  },
  logoWrapper: {
    flex: 1,
    alignItems: 'center',
    marginRight: -22,
  },
});
