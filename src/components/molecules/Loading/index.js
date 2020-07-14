import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {colors} from '../../../utils';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
