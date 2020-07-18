import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ILNullPhoto} from '../../../assets';
import {fonts, colors} from '../../../utils';

const index = ({onPress, viewOnly}) => {
  if (viewOnly) {
    return (
      <View style={styles.profileWrapper}>
        <ILNullPhoto style={styles.avatar} />
        <View style={styles.profile}>
          <Text style={styles.name}>Bertran</Text>
          <Text style={styles.email}>Bertran@gmail.com</Text>
          <Text style={styles.desc}>Paket berlangganan AKTIF</Text>
          <Text style={styles.desc}>Aktif Hingga 12 September 2020</Text>
        </View>
      </View>
    );
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.profileWrapper}>
      <ILNullPhoto style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>Bertran</Text>
        <Text style={styles.email}>Bertran@gmail.com</Text>
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
