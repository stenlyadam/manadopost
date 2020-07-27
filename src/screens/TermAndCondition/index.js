import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Title, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const index = () => {
  return (
    <View style={styles.screen}>
      <Title title="Term And Condition" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.text}>
            Untuk memanfaatkan situs, pengguna diminta untuk memberikan
            informasi pribadi saat registrasi/pendaftaran online, antara lain:
            a) nama, b) alamat email, c) jenis kelamin, d) umur, e) pekerjaan
            dan lain-lain. Informasi yang diberikan para pengguna akan digunakan
            sebagai bahan evaluasi terhadap situs kami untuk meningkatkan
            layanan pada anggota.
          </Text>
          <Gap height={10} />
          <Text style={styles.text}>
            PT Jawa Pos Grup Mutlimedia menjaga privacy pengakses situs serta
            tidak akan memberikan dan menggunakan data tersebut kepada pihak
            ketiga dengan tujuan apa pun. Namun, PT Jawa Pos Grup Multimedia
            berhak memberikan informasi pemilik ID kepada pihak berwajib bila
            terjadi penipuan atau tindakan yang melanggar hukum yang berlaku di
            Republik Indonesia.
          </Text>
          <Gap height={10} />
          <Text style={styles.text}>
            Demi keamanan, PT Jawa Pos Grup Multimedia dapat memonitor aktivitas
            pengunjung situs. PT Jawa Pos Grup Multimedia berhak membekukan
            ataupun memblokir pengunjung situs yang dicurigai mencoba melakukan
            konfirmasi secara acak ataupun kegiatan hacking lainnya. Pembekuan
            yang dimaksud dapat berupa pemblokiran terhadap nama user, ip
            address, ataupun nomor rekening.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 10,
    paddingHorizontal: 20,
  },
  text: {
    fontFamily: fonts.primary.normal,
    fontSize: 18,
    color: colors.text.primary,
    textAlign: 'justify',
  },
});
