import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {ILPaper} from '../../assets';
import {Button, Loading, Profile} from '../../components';
import {colors, fonts, showError, storeData} from '../../utils';

const UserProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const signOut = () => {
    setLoading(true);
    auth()
      .signOut()
      .then(() => {
        setLoading(false);
        dispatch({type: 'SET_LOGIN', value: false});
        storeData('user', {});
        navigation.replace('MainApp');
      })
      .catch((err) => {
        setLoading(false);
        showError(err.message);
      });
  };
  return (
    <>
      <View style={styles.screen}>
        <Profile viewOnly />
        <Button
          title="Edit akun"
          onPress={() => navigation.navigate('EditProfile')}
        />
        <View style={styles.content}>
          <View>
            <Text style={styles.contentText}>
              Berlangganan Manado Post Digital Premium:
            </Text>
            <Text style={styles.contentText}>
              {' '}
              - Akses e-Koran terupdate setiap hari
            </Text>
            <Text style={styles.contentText}>
              {' '}
              - Berhak mendapatkan Undian yang di Undi setiap bulan{' '}
            </Text>
            <Text style={styles.contentText}> - Mendapatkan promo khusus </Text>
          </View>
          <View style={styles.image}>
            <Image source={ILPaper} />
          </View>
          <View style={styles.subscribe}>
            <Button
              type="button-subscribe"
              title="1 Bulan"
              price="Rp. 15.000"
            />
            <Button
              type="button-subscribe"
              title="2 Bulan"
              price="Rp. 25.000"
            />
            <Button
              type="button-subscribe"
              title="3 Bulan"
              price="Rp. 30.000"
            />
          </View>
          <Button title="Logout" onPress={signOut} />
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  wrapperProfile: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 18,
    alignItems: 'center',
  },
  avatar: {
    height: 72,
    width: 72,
    borderRadius: 72 / 2,
    marginRight: 12,
  },
  subscribe: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  name: {
    fontFamily: fonts.primary[700],
    fontSize: 18,
    color: colors.primary,
  },
  email: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.text.secondary,
  },
  desc: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.primary,
  },
  image: {
    alignItems: 'center',
    marginBottom: 15,
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
    marginTop: 5,
  },
  contentText: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.text.primary,
  },
});
