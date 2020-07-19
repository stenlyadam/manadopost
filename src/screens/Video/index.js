import React from 'react';
import {View} from 'react-native';
import {Header, Title} from '../../components';

const Video = ({route, navigation}) => {
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

export default Video;
