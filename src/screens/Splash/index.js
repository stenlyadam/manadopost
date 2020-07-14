import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ILLogo, JSONLatestNews} from '../../assets';
import {colors} from '../../utils';

const Splash = ({navigation}) => {
  const [news, setNews] = useState({});

  useEffect(() => {
    setNews(JSONLatestNews.data);
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.page}>
      <ILLogo />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
