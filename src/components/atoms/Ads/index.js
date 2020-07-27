import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';

const Ads = ({type, title, image}) => {
  return (
    <View style={styles.container}>
      {type === 'small-banner' && (
        <ImageBackground source={image} style={styles.bannerSmall}>
          <Text>{title} Small Ads</Text>
        </ImageBackground>
      )}
      {type === 'medium-banner' && (
        <ImageBackground source={image} style={styles.bannerMedium}>
          <Text>{title} Medium Ads</Text>
        </ImageBackground>
      )}
      {type === 'full-banner' && (
        <ImageBackground source={image} style={styles.bannerFull}>
          <Text>{title} Full Ads</Text>
        </ImageBackground>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerMedium: {
    width: '100%',
    height: 360,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerFull: {
    width: '100%',
    height: 580,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
