import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import {showMessage} from 'react-native-flash-message';
import {useDispatch} from 'react-redux';
import {ILLogoBlue} from '../../assets';
import {Button, Gap, Input, Link, Loading} from '../../components';
import {Fire} from '../../config';
import {colors, fonts, storeData, useForm} from '../../utils';
import {GoogleSignin} from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId:
    '451238088540-06p3mn77g84bgv7nnq7bci1m0jk1dm5a.apps.googleusercontent.com',
});

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const signIn = () => {
    setLoading(true);
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        Fire.database()
          .ref(`users/${success.user.uid}/`)
          .once('value')
          .then((res) => {
            if (res.val()) {
              storeData('user', res.val());
              navigation.navigate('MainApp');
            }
            setLoading(false);
            dispatch({type: 'SET_LOGIN', value: true});
          });
      })
      .catch(
        (error) =>
          showMessage({
            message: error.message,
            type: 'default',
            backgroundColor: colors.error,
            color: colors.white,
          }),
        setLoading(false),
      );
  };

  const getFacebookAuth = async () => {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
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
    await GoogleSignin.hasPlayServices();
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  const signInFacebook = () => {
    setLoading(true);
    getFacebookAuth()
      .then((res) => {
        const data = {
          uid: res.user.uid,
          fullName: res.user.displayName,
          email: res.user.email,
          photo: res.user.photoURL,
        };
        Fire.database().ref(`users/${data.uid}/`).set(data);
        storeData('user', data);
        dispatch({type: 'SET_LOGIN', value: true});
        setLoading(false);
        navigation.replace('MainApp');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
        showMessage({
          message: error.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };

  const signInGoogle = () => {
    setLoading(true);
    getGoogleAuth()
      .then((res) => {
        const data = {
          uid: res.user.uid,
          fullName: res.user.displayName,
          email: res.user.email,
          photo: res.user.photoURL,
        };
        Fire.database().ref(`users/${data.uid}/`).set(data);
        storeData('user', data);
        dispatch({type: 'SET_LOGIN', value: true});
        setLoading(false);
        navigation.replace('MainApp');
      })
      .catch((error) => {
        setLoading(false);
        showMessage({
          message: error.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };

  return (
    <>
      <View style={styles.screen}>
        <Gap height={30} />
        <View style={styles.logoWrapper}>
          <ILLogoBlue style={styles.logo} />
        </View>
        <Gap height={74} />

        <Input
          placeholder="Email"
          icon="email"
          value={form.email}
          onChangeText={(value) => setForm('email', value)}
        />
        <Input
          placeholder="Password"
          icon="password"
          secureTextEntry
          value={form.password}
          onChangeText={(value) => setForm('password', value)}
        />
        <Gap height={30} />
        <Button title="Masuk" onPress={signIn} />
        <Gap height={24} />
        <Text style={styles.text}>Atau masuk dengan</Text>
        <Gap height={22} />

        <View style={styles.socialLogin}>
          <Button
            title="Facebook"
            type="button-icon-text"
            onPress={signInFacebook}
          />
          <Button
            title="Google"
            type="button-icon-text"
            onPress={signInGoogle}
          />
        </View>
        <Gap height={70} />
        <View style={styles.register}>
          <Text style={styles.text}>Buat Akun Gratis? </Text>
          <Link
            title="Klik disini"
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 30,
    backgroundColor: colors.white,
    flex: 1,
  },
  logoWrapper: {
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: 'center',
  },
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  register: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
