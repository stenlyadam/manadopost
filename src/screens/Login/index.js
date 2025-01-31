import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import Moment from 'moment';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import {RadioButton} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {ILLogoBluePNG} from '../../assets';
import {Button, Gap, Loading} from '../../components';
import {Fire, Google} from '../../config';
import {
  checkExpireDate,
  colors,
  fonts,
  showError,
  storeData,
} from '../../utils';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [checked] = useState('checked');

  const getFacebookAuth = async () => {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    const error = {
      message: '',
    };

    if (result.isCancelled) {
      error.message = 'Login cancelled';
      throw error;
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  };

  const getGoogleAuth = async () => {
    await Google.hasPlayServices();
    // Get the users ID token
    await Google.hasPlayServices();
    const {idToken} = await Google.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  const signInWithFacebook = () => {
    setLoading(true);

    getFacebookAuth()
      .then((res) => {
        saveUserData(res);
      })
      .catch((error) => {
        let message = '';
        if (error.code === 'auth/account-exists-with-different-credential') {
          message = 'Anda sudah terdaftar menggunakan social media yang lain';
        } else {
          message = error.message;
        }
        setLoading(false);
        showError(message);
      });
  };

  const signInWithGoogle = () => {
    setLoading(true);
    getGoogleAuth()
      .then((res) => {
        saveUserData(res);
      })
      .catch((error) => {
        setLoading(false);
        showError(error.message);
      });
  };

  const saveUserData = async (res) => {
    //Get user Token for push notification
    await messaging().requestPermission();
    const userToken = await messaging().getToken();

    const newUser = {
      uid: res.user.uid,
      fullName: res.user.displayName,
      email: res.user.email,
      photo: res.user.photoURL,
      token: userToken,
      subscription: {
        isSubscribed: true,
        orderId: '',
        productId: '3 hari percobaan',
        purchaseDate: Moment().format(),
        expireDate: Moment().add(3, 'days').format(),
      },
    };

    //Check if user exists
    Fire.database()
      .ref('users/')
      .orderByChild('uid')
      .equalTo(newUser.uid)
      .once('value')
      .then((user) => {
        //If Not Exist then add new user
        if (!user.val()) {
          Fire.database().ref(`users/${newUser.uid}/`).set(newUser);
          //Store in async storage
          storeData('user', newUser);
        } else {
          //Update token in case token is changed
          Fire.database()
            .ref(`users/${newUser.uid}/`)
            .update({token: userToken});
          //Get user data and Convert object to array
          const userArr = Object.values(user.val());
          //Store in async storage
          storeData('user', userArr[0]);
          const isExpire = checkExpireDate(userArr[0]);
          if (isExpire) {
            dispatch({type: 'SET_SUBSCRIPTION', value: false});
          } else {
            dispatch({type: 'SET_SUBSCRIPTION', value: true});
          }
        }
        dispatch({type: 'SET_LOGIN', value: true});

        setLoading(false);
        navigation.replace('MainApp');
      })
      .catch((error) => {
        setLoading(false);
        showError('Error');
      });
  };

  return (
    <>
      <View style={styles.screen}>
        <View style={styles.logoWrapper}>
          <Image source={ILLogoBluePNG} style={styles.logo} />
        </View>
        <View style={styles.content}>
          <View>
            <Text style={styles.text}>
              Login praktis dengan akun media sosial
            </Text>
            <View style={styles.term}>
              <Text style={styles.text}>I accept terms and agreement</Text>
              <RadioButton
                value="agree"
                status={checked}
                onPress={() => {
                  navigation.navigate('TermAndCondition');
                }}
                color={colors.primary}
              />
            </View>
          </View>

          <View style={styles.socialLogin}>
            <Gap height={20} />
            <Button
              title="Facebook"
              type="button-icon-text"
              onPress={signInWithFacebook}
            />
            <Gap height={40} />
            <Button
              title="Google"
              type="button-icon-text"
              onPress={signInWithGoogle}
            />
            <Gap height={20} />
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Dapatkan berita gratis terupdate setiap hari di MP News
          </Text>
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  logoWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: 'center',
    paddingVertical: 10,
  },
  content: {
    flex: 2,
  },
  socialLogin: {
    borderTopColor: colors.border2,
    borderTopWidth: 1,
    borderBottomColor: colors.border2,
    borderBottomWidth: 1,
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footer: {
    marginHorizontal: -30,
    backgroundColor: colors.primary,
    height: 100,
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  footerText: {
    color: colors.white,
    textAlign: 'center',
    fontFamily: fonts.primary.normal,
    fontSize: 16,
  },
  term: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 225,
    height: 25,
  },
});
