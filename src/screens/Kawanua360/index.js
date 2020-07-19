import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Title} from '../../components';

const Kawanua360 = ({navigation, route}) => {
  const {title} = route.params;
  return (
    <View>
      <Header
        type="logo-only"
        onPressUserProfile={() => navigation.navigate('UserProfile')}
      />
      <Title title={title} />
    </View>
  );
};

export default Kawanua360;

const styles = StyleSheet.create({});
