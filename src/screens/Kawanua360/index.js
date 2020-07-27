import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, Title, WebView} from '../../components';

const Kawanua360 = ({navigation, route}) => {
  const {title} = route.params;
  return (
    <View style={styles.screen}>
      <Header
        type="logo-profile"
        onPressUserProfile={() => navigation.navigate('UserProfile')}
      />
      <Title title={title} />
      <WebView
        type="uri"
        uri="http://kawanua360.com/location/manado/telukmanado/"
      />
    </View>
  );
};

export default Kawanua360;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
