import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from '../../components';
import {colors} from '../../utils';

const Digital = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Header title="Berita Terbaru" type="logo-only" />
      <Text>MP Digital Screen</Text>
    </View>
  );
};

export default Digital;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
