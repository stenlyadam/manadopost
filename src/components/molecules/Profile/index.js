/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {ILNullPhotoPNG} from '../../../assets';
import {fonts, colors, getData, getProductTitle} from '../../../utils';

const index = ({onPress, viewOnly}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    photo: ILNullPhotoPNG,
    subscription: {},
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
          {profile.subscription.isSubscribed && (
            <>
              <Text style={styles.name}>{profile.fullName}</Text>
              <Text style={styles.email}>{profile.email}</Text>
              <Text style={styles.premium}>PREMIUM MEMBER</Text>
              <Text style={styles.desc}>
                Paket berlangganan :{' '}
                {getProductTitle(profile.subscription.productId)}
              </Text>
              <Text style={styles.desc}>
                Aktif Hingga {profile.subscription.expireDate}
              </Text>
            </>
          )}
          {!profile.subscription.isSubscribed && (
            <>
              <Text style={styles.email}>{profile.email}</Text>
              <Text style={styles.desc}>Paket berlangganan: BELUM AKTIF</Text>
            </>
          )}
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
    marginBottom: 10,
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
    maxWidth: 200,
  },
  desc: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.primary,
  },
  premium: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    color: colors.primary,
  },
});
