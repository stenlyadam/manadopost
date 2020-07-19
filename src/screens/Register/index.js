import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogoBlue} from '../../assets';
import {Input, Button, Link, Gap, Loading} from '../../components';
import {colors, fonts, useForm, storeData} from '../../utils';
import {Fire} from '../../config';
import {showMessage} from 'react-native-flash-message';
import {useDispatch} from 'react-redux';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onRegister = () => {
    setLoading(true);

    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        const data = {
          fullName: form.fullName,
          email: form.email,
          phoneNumber: form.phoneNumber,
        };

        Fire.database().ref(`users/${success.user.uid}/`).set(data);
        storeData('user', data);

        setForm('reset');
        setLoading(false);
        dispatch({type: 'SET_LOGIN', value: true});
        navigation.replace('MainApp');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoading(false);
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };

  return (
    <>
      <View style={styles.screen}>
        <View style={styles.logo}>
          <ILLogoBlue />
        </View>
        <Text style={styles.title}>
          Dapatkan berita gratis terupdate setiap hari di tab MP News
        </Text>
        <View>
          <Input
            placeholder="Nama lengkap"
            icon="account"
            value={form.fullName}
            onChangeText={(value) => setForm('fullName', value)}
          />
          <Input
            placeholder="Email"
            icon="email"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Input
            placeholder="Handphone"
            icon="handphone"
            keyboardType="number-pad"
            value={form.phoneNumber}
            onChangeText={(value) => setForm('phoneNumber', value)}
          />
          <Input
            placeholder="Sandi"
            icon="password"
            secureTextEntry
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
          />
          {/* <Input placeholder="Ulangi Sandi" icon="password" /> */}
        </View>
        <Gap height={17} />
        <Button title="Buat Akun" onPress={onRegister} />
        <Gap height={20} />
        <View style={styles.login}>
          <Text style={styles.text}>Sudah memiliki akun? </Text>
          <Link
            title="Klik disini"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 35,
    backgroundColor: colors.white,
    paddingHorizontal: 28,
    flex: 1,
  },
  logo: {
    alignItems: 'center',
  },
  title: {
    marginTop: 13,
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: 31,
  },
  login: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.secondary,
  },
});
