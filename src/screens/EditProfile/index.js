import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ILNullPhotoPNG} from '../../assets';
import {Button, Input} from '../../components';
import {colors, getData, storeData} from '../../utils';
import {Fire} from '../../config';

const EditProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    uid: '',
    photo: '',
    photoURI: ILNullPhotoPNG,
    fullName: '',
    phoneNumber: '',
    email: '',
  });

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photoURI = {uri: res.photo};
      setProfile(data);
      setFullName(res.fullName);
      setPhoneNumber(res.phoneNumber);
    });
  }, []);

  const updateProfile = () => {
    Fire.database()
      .ref(`users/${profile.uid}/`)
      .update({fullName: fullName, phoneNumber: phoneNumber});

    const data = {
      uid: profile.uid,
      photo: profile.photo,
      fullName: fullName,
      phoneNumber: phoneNumber,
      email: profile.email,
    };

    storeData('user', data);
    navigation.replace('MainApp');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.avatarWrapper}>
        <Image source={profile.photoURI} style={styles.avatar} />
      </View>
      <Input
        icon="account"
        value={fullName}
        onChangeText={(value) => setFullName(value)}
      />
      <Input
        icon="handphone"
        placeholder="08xxxxxxxx"
        value={phoneNumber}
        onChangeText={(value) => setPhoneNumber(value)}
        keyboardType="phone-pad"
      />
      <Button title="Ubah" onPress={updateProfile} />
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 30,
    backgroundColor: colors.white,
    flex: 1,
  },
  avatarWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 25,
  },
  avatar: {
    height: 72,
    width: 72,
    borderRadius: 72 / 2,
    paddingTop: 22,
  },
});
