import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {colors} from '../../../utils';

const Ads = ({type, title, image}) => {
  return (
    <View style={styles.container}>
      {type === 'extra-small-banner' && (
        <Image source={image} style={styles.bannerExtraSmall} />
      )}
      {type === 'small-banner' && (
        <Image source={image} style={styles.bannerSmall} />
      )}
      {type === 'medium-banner' && (
        <Image source={image} style={styles.bannerMedium} />
      )}
      {type === 'full-banner' && (
        <Image source={image} style={styles.bannerFull} />
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
  bannerExtraSmall: {
    width: '100%',
    height: 120,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerSmall: {
    width: '100%',
    height: 180,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerMedium: {
    width: '100%',
    height: 320,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerFull: {
    width: '100%',
    height: 620,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
