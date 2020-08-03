import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Button} from '../../atoms';
import {colors} from '../../../utils';

const index = ({navigation}) => {
  return (
    <View style={styles.menu}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Button
          title="Beranda"
          onPress={() => navigation.navigate('Beranda')}
        />
        <Button
          title="Berita Terbaru"
          onPress={() => navigation.navigate('BeritaTerbaru')}
        />
        <Button title="Ekbis" onPress={() => navigation.navigate('Ekbis')} />
        <Button title="Polbub" onPress={() => navigation.navigate('Polbub')} />
        <Button
          title="KumKrim"
          onPress={() => navigation.navigate('HukumKriminal')}
        />
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  menu: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 51,
  },
});
