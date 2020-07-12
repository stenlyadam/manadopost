import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../atoms';

const Header = ({
  title,
  backButton,
  onPressBack,
  onPressMenu,
  onPressSearch,
}) => {
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
      <Gap height={3} />
      <View style={styles.menu}>
        <Text style={styles.menuText}>Berita Terbaru</Text>
        <Text style={styles.menuText}>Berita Utama</Text>
        <Text style={styles.menuText}>Eksbis</Text>
        <Text style={styles.menuText}>Polbup</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
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
  menu: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 51,
  },
  menuText: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.white,
  },
  title: {
    backgroundColor: colors.tertiary,
    paddingLeft: 12,
    paddingVertical: 7,
  },
  titleText: {
    color: colors.white,
    textTransform: 'uppercase',
    fontSize: 16,
    fontFamily: fonts.primary[600],
  },
});
