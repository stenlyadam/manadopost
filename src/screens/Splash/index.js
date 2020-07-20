import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ILLogo} from '../../assets';
import {colors} from '../../utils';
import {Fire} from '../../config';
import {useDispatch} from 'react-redux';

const Splash = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      Fire.auth().onAuthStateChanged((user) => {
        if (user) {
          dispatch({type: 'SET_LOGIN', value: true});
        }
        navigation.replace('MainApp');
      });
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
