/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {ILNullPhotoPNG} from '../../../assets';
import {fonts, colors, getData} from '../../../utils';

const index = ({onPress, viewOnly}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    photo: ILNullPhotoPNG,
  });

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  }, []);

  if (viewOnly) {
    return (
      <View style={styles.profileWrapper}>
        <Image source={profile.photo} style={styles.avatar} />
        <View style={styles.profile}>
          <Text style={styles.name}>{profile.fullName}</Text>
          <Text style={styles.email}>{profile.email}</Text>
          <Text style={styles.desc}>Paket berlangganan AKTIF</Text>
          <Text style={styles.desc}>Aktif Hingga 12 September 2020</Text>
        </View>
      </View>
    );
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.profileWrapper}>
      <Image source={profile.photo} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.email}>{profile.email}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  profileWrapper: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
    flexDirection: 'row',
    marginLeft: 10,
  },
  avatar: {
    height: 72,
    width: 72,
    borderRadius: 72 / 2,
  },
  profile: {
    paddingLeft: 10,
  },
  name: {
    fontFamily: fonts.primary[700],
    fontSize: 18,
    color: colors.primary,
    textTransform: 'capitalize',
    maxWidth: 200,
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
});
