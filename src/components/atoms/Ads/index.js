import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {DummyAds1, DummyAds2, DummyAds3} from '../../../assets';
import {colors} from '../../../utils';

const Ads = ({type}) => {
  return (
    <View style={styles.container}>
      {type === 'small-banner' && (
        <Image source={DummyAds1} style={styles.bannerSmall} />
      )}
      {type === 'medium-banner' && (
        <Image source={DummyAds2} style={styles.bannerMedium} />
      )}
      {type === 'full-banner' && (
        <Image source={DummyAds3} style={styles.bannerFull} />
      )}
    </View>
  );
};

export default Ads;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  bannerSmall: {
    width: '100%',
    height: 160,
    borderRadius: 14,
  },
  bannerMedium: {
    width: '100%',
    height: 360,
    borderRadius: 14,
  },
  bannerFull: {
    width: '100%',
    height: 580,
    borderRadius: 14,
  },
});
