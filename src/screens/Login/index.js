import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogoBlue} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {colors, fonts} from '../../utils';

const Login = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Gap height={96} />
      <View style={styles.logoWrapper}>
        <ILLogoBlue style={styles.logo} />
      </View>
      <Gap height={74} />

      <Input placeholder="Username" icon="account" />
      <Input placeholder="Password" icon="password" secureTextEntry />
      <Gap height={30} />
      <Button title="Masuk" onPress={() => navigation.navigate('Register')} />
      <Gap height={24} />
      <Text style={styles.text}>Atau masuk dengan</Text>
      <Gap height={22} />
      <View style={styles.socialLogin}>
        <Button title="Facebook" type="button-icon-text" />
        <Button title="Google" type="button-icon-text" />
      </View>
      <Gap height={120} />
      <View style={styles.register}>
        <Text style={styles.text}>Buat Akun Gratis? </Text>
        <Link title="Klik disini" />
      </View>
    </View>
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
