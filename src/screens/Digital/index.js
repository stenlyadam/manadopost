import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Title} from '../../components';
import {colors} from '../../utils';

const Digital = ({route}) => {
  const {title} = route.params;
  return (
    <View style={styles.screen}>
      <Header title="Berita Terbaru" type="logo-only" />
      <Title title={title} />
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
