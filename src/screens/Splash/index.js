import auth from '@react-native-firebase/auth';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ILLogo} from '../../assets';
import {colors} from '../../utils';
import {Fire} from '../../config';

const Splash = ({navigation}) => {
  const isSubscribe = useSelector((state) => state.subscription);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      auth().onAuthStateChanged((user) => {
        if (user) {
          dispatch({type: 'SET_LOGIN', value: true});
          Fire.database()
            .ref(`users/${user.uid}`)
            .once('value')
            .then((res) => {
              const data = res.val();
              if (data.subscription.isSubscribed) {
                dispatch({type: 'SET_SUBSCRIPTION', value: true});
              }
            });
        }
        navigation.replace('MainApp');
      });
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.page(isSubscribe)}>
      <ILLogo />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: (isSubscribe) => ({
    flex: 1,
    backgroundColor: isSubscribe ? colors.black : colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  }),
});
