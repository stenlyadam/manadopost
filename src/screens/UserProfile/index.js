import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ILNullPhoto, ILPaper} from '../../assets';
import {colors, fonts} from '../../utils';
import {Button, Gap} from '../../components';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <View style={styles.wrapperProfile}>
        <ILNullPhoto style={styles.avatar} />
        <View style={styles.profile}>
          <Text style={styles.name}>Betran</Text>
          <Text style={styles.email}>BetranManado@gmail.com</Text>
          <Text style={styles.desc}>Paket berlangganan AKTIF</Text>
          <Text style={styles.desc}>Aktif Hingga 12 September 2020</Text>
        </View>
      </View>
      <Button
        title="Edit akun"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <Gap height={12} />
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
          <Button type="button-subscribe" title="1 Bulan" price="Rp. 15.000" />
          <Button type="button-subscribe" title="2 Bulan" price="Rp. 25.000" />
          <Button type="button-subscribe" title="3 Bulan" price="Rp. 30.000" />
        </View>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 20,
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
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
  },
  contentText: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.text.primary,
  },
});
