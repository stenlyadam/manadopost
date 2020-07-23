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

  const FacebookAuth = async () => {
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

  const signInFacebook = () => {
    FacebookAuth()
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
        navigation.replace('MainApp');
      })
      .catch((error) => {
        showMessage({
          message: 'Login Facebook gagal',
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
          <Button title="Google" type="button-icon-text" />
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
