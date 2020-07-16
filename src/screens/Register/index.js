import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogoBlue} from '../../assets';
import {Input, Button, Link, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const Register = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <View style={styles.logo}>
        <ILLogoBlue />
      </View>
      <Text style={styles.title}>
        Dapatkan berita gratis terupdate setiap hari di tab MP News
      </Text>
      <View>
        <Input placeholder="Username" icon="account" />
        <Input placeholder="Email" icon="email" />
        <Input placeholder="Handphone" icon="handphone" />
        <Input placeholder="Sandi" icon="password" />
        <Input placeholder="Ulangi Sandi" icon="password" />
      </View>
      <Gap height={17} />
      <Button
        title="Buat Akun"
        onPress={() => navigation.navigate('MainApp')}
      />
      <Gap height={20} />
      <View style={styles.login}>
        <Text style={styles.text}>Sudah memiliki akun? </Text>
        <Link title="Klik disini" />
      </View>
    </View>
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
