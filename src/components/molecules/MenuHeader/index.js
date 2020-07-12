import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';

const MenuHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Berita Terbaru</Text>
      <Text style={styles.text}>Berita Utama</Text>
      <Text style={styles.text}>Eksbis</Text>
      <Text style={styles.text}>Polbup</Text>
    </View>
  );
};

export default MenuHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 51,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white,
  },
});
