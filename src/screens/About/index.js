import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  IconFacebookRounded,
  IconInstagramRounded,
  IconWebsiteRounded,
  IconWhatsappRounded,
} from '../../assets';
import {Gap, Header} from '../../components';
import {colors, fonts} from '../../utils';
import {useSelector} from 'react-redux';

const About = ({navigation}) => {
  const isSubscribe = useSelector((state) => state.subscription);
  return (
    <>
      <Header type="back-only" onPressBack={() => navigation.goBack()} />
      <View style={styles.screen}>
        <View style={styles.content}>
          <View style={styles.addressWrapper}>
            <Text style={styles.building}>Gedung Graha Pena</Text>
            <Text style={styles.address}>
              Jl. Babe Palar No. 62 Wanea - Manado
            </Text>
            <Text style={styles.address}>Tlp : (0431) 855-558, 855-559</Text>
            <Text style={styles.address}>Hp/WA : 081340747101</Text>
            <Text style={styles.address}>
              Email : redaksimanadopost@gmail.com
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://manadopost.jawapos.com/redaksi/');
            }}>
            <Text style={styles.information}>Redaksi </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://manadopost.jawapos.com/tentang-kami/');
            }}>
            <Text style={styles.information}>Tentang Kami </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                'https://manadopost.jawapos.com/pedoman-media-siber/',
              );
            }}>
            <Text style={styles.information}>Pedoman Media Siber</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://manadopost.jawapos.com/privacy-policy/');
            }}>
            <Text style={styles.information}>Privacy Policy </Text>
          </TouchableOpacity>
          <Gap height={40} />
          <View style={styles.contact}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://manadopost.jawapos.com/');
              }}>
              <IconWebsiteRounded />
            </TouchableOpacity>

            <Gap width={20} />
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'https://api.whatsapp.com/send?phone=6281340747101&text=Haloo%20Admin%20Saya%20menghubungi%20dari%20App%20&source=&data=&app_absent=',
                );
              }}>
              <IconWhatsappRounded />
            </TouchableOpacity>
            <Gap width={20} />
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://www.instagram.com/manado.post.id/');
              }}>
              <Image source={IconInstagramRounded} style={styles.icon} />
            </TouchableOpacity>
            <Gap width={20} />
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://www.facebook.com/Manadopostgrup');
              }}>
              <IconFacebookRounded />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer(isSubscribe)}>
          <Text style={styles.footerText}>
            Dapatkan berita gratis terupdate setiap hari di MP News
          </Text>
        </View>
      </View>
    </>
  );
};

export default About;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  address: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.primary,
    textAlign: 'center',
  },
  addressWrapper: {
    marginBottom: 20,
    alignItems: 'center',
  },
  building: {
    fontFamily: fonts.primary[800],
    fontSize: 16,
    color: colors.text.primary,
  },
  information: {
    fontFamily: fonts.primary[700],
    fontSize: 16,
    color: colors.primary,
    paddingVertical: 10,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
  },
  contact: {
    flexDirection: 'row',
  },
  logo: {
    marginVertical: 30,
    width: 225,
    height: 25,
  },
  footer: (isSubscribe) => ({
    marginHorizontal: -30,
    backgroundColor: isSubscribe ? colors.black : colors.primary,
    height: 100,
    justifyContent: 'center',
    paddingHorizontal: 50,
  }),
  footerText: {
    color: colors.white,
    textAlign: 'center',
    fontFamily: fonts.primary.normal,
    fontSize: 16,
  },
  icon: {
    height: 31,
    width: 31,
  },
});
