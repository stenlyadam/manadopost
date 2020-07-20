import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Title, WebView} from '../../components';
import {colors} from '../../utils';

const index = ({route}) => {
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
