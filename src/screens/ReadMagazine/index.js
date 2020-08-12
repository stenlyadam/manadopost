import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Title, WebView, Header} from '../../components';
import {colors} from '../../utils';

const index = ({route, navigation}) => {
  const {uri, title} = route.params;
  return (
    <>
      <Header type="back-only" onPressBack={() => navigation.goBack()} />
      <View style={styles.screen}>
        <Title title={title} />
        <WebView type="uri" uri={uri} />
      </View>
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
