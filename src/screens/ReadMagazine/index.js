import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {WebView, Title} from '../../components';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {colors} from '../../utils';

const index = ({navigation, route}) => {
  const {uri, title} = route.params;
  return (
    <View style={styles.screen}>
      <Title title={title} />
      <WebView type="uri" uri={uri} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
