import React from 'react';
import {View, Text} from 'react-native';
import {Header, Title, WebView} from '../../components';

const Kawanua360 = ({navigation, route}) => {
  const {title} = route.params;
  return (
    <View>
      <Header
        type="logo-only"
        onPressUserProfile={() => navigation.navigate('UserProfile')}
      />
      <Title title={title} />
      <WebView type="uri" uri="https://reactnative.dev/" />
    </View>
  );
};

export default Kawanua360;
