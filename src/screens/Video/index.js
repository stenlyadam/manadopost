import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, Title, WebView} from '../../components';

const Video = ({navigation, route}) => {
  const {title} = route.params;
  return (
    <View style={styles.screen}>
      <Header
        type="logo-only"
        onPressUserProfile={() => navigation.navigate('UserProfile')}
      />
      <Title title={title} />
      <WebView
        type="uri"
        uri="https://www.youtube.com/channel/UCBFm_YGs7TlfUge7K0Gf9ZA"
      />
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
