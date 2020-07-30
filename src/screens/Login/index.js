import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import {RadioButton} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {ILLogoBlue} from '../../assets';
import {Button, Gap, Loading} from '../../components';
import {Fire, Google} from '../../config';
import {colors, fonts, showError, storeData} from '../../utils';

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

  const saveUserData = (res) => {
    const newUser = {
      uid: res.user.uid,
      fullName: res.user.displayName,
      email: res.user.email,
      photo: res.user.photoURL,
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
          //Get user data and Convert object to array
          const oldUser = Object.values(user.val());
          //Store in async storage
          storeData('user', oldUser[0]);
        }
        dispatch({type: 'SET_LOGIN', value: true});
        setLoading(false);
        navigation.replace('MainApp');
      })
      .catch(() => {
        setLoading(false);
        showError('Error');
      });
  };

  return (
    <>
      <View style={styles.screen}>
        <View style={styles.logoWrapper}>
          <ILLogoBlue style={styles.logo} />
        </View>
        <View style={styles.content}>
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
    flex: 1,
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
});
