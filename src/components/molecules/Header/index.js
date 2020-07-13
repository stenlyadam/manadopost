import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {ILLogo} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../atoms';

const Header = ({
  navigation,
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
      <Gap height={2} />
      {!backButton && (
        <View style={styles.menu}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Button
              title="Berita Terbaru"
              onPress={() => navigation.navigate('MainApp')}
            />
            <Button
              title="Berita Utama"
              onPress={() => navigation.navigate('BeritaUtama')}
            />
            <Button title="Eksibs" />
            <Button
              title="Berita Utama"
              onPress={() => navigation.navigate('BeritaUtama')}
            />
            <Button title="Eksibs" />
            <Button title="Eksibs" />
            <Button
              title="Berita Utama"
              onPress={() => navigation.navigate('BeritaUtama')}
            />
          </ScrollView>
        </View>
      )}
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
