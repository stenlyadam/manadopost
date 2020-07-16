import React, {useState} from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {StyleSheet, View, Text} from 'react-native';
import {ILNullPhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const index = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [signIn] = useState(true);

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerSection}>
          {signIn && (
            <View style={styles.profileWrapper}>
              <ILNullPhoto style={styles.avatar} />
              <View style={styles.profile}>
                <Text style={styles.name}>Bertran</Text>
                <Text style={styles.email}>Bertran@gmail.com</Text>
              </View>
            </View>
          )}
          {!signIn && (
            <View style={styles.signIn}>
              <Button
                title="Sign In"
                onPress={() => props.navigation.navigate('Login')}
              />
            </View>
          )}
        </View>
        <View style={styles.drawerSection}>
          <DrawerItem
            label="Berita Terbaru"
            onPress={() => {
              props.navigation.navigate('BeritaTerbaru');
            }}
          />
          <DrawerItem
            label="Berita Utama"
            onPress={() => {
              props.navigation.navigate('BeritaUtama');
            }}
          />
          <DrawerItem
            label="Ekbis"
            onPress={() => {
              props.navigation.navigate('Ekbis');
            }}
          />
          <DrawerItem
            label="Polbub"
            onPress={() => {
              props.navigation.navigate('Polbub');
            }}
          />
          <DrawerItem
            label="Nasional"
            onPress={() => {
              props.navigation.navigate('Nasional');
            }}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerSection: {
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
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
  signIn: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});
