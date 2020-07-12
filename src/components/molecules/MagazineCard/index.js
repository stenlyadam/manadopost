import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {DummyMagazine} from '../../../assets';
import {colors} from '../../../utils';
import {Gap} from '../../atoms';

const MagazineCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.date}>Senin, 27 Juni 2020</Text>
      <Gap height={4} />
      <Image source={DummyMagazine} />
      <Gap height={5} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Download</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MagazineCard;

const styles = StyleSheet.create({
  card: {
    width: 167,
    height: 222,
    alignItems: 'center',
  },
  date: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.greyText,
  },
  image: {
    width: '100%',
  },
  button: {
    backgroundColor: colors.greyBackground1,
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
