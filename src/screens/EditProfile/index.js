import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILNullPhoto} from '../../assets';
import {Input, Button, Gap} from '../../components';
import {colors} from '../../utils';

const EditProfile = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.avatarWrapper}>
        <ILNullPhoto style={styles.avatar} />
      </View>

      <View>
        <Input icon="account" placeholder="bertran" />
        <Input icon="handphone" placeholder="081xxxxxx" />
        <Text>Ubah Sandi (biarkan kosong jika tidak ingin mengubah sandi)</Text>
        <Input icon="password" placeholder="Sandi lama" secureTextEntry />
        <Input icon="password" placeholder="Sandi baru" secureTextEntry />
        <Input
          icon="password"
          placeholder="Ulangi sandi baru"
          secureTextEntry
        />
        <Gap height={32} />
        <Button title="Ubah" />
      </View>
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
