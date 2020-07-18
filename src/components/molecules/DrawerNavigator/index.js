import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILNullPhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const index = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [signIn] = useState(true);

  return (
    <View style={styles.container}>
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
      <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
        <View style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="calendar-today" color={color} size={size} />
            )}
            label="Berita Terbaru"
            onPress={() => {
              props.navigation.navigate('BeritaTerbaru');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="bulletin-board" color={color} size={size} />
            )}
            label="Berita Utama"
            onPress={() => {
              props.navigation.navigate('BeritaUtama');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="finance" color={color} size={size} />
            )}
            label="Ekonomi & Bisnis"
            onPress={() => {
              props.navigation.navigate('Ekbis');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="bank" color={color} size={size} />
            )}
            label="Politik & Publika"
            onPress={() => {
              props.navigation.navigate('Polbub');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="city" color={color} size={size} />
            )}
            label="Kawanuapolis"
            onPress={() => {
              props.navigation.navigate('Kawanuapolis');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="flag" color={color} size={size} />
            )}
            label="Nasional"
            onPress={() => {
              props.navigation.navigate('Nasional');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="earth" color={color} size={size} />
            )}
            label="Internasional"
            onPress={() => {
              props.navigation.navigate('Internasional');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="fingerprint" color={color} size={size} />
            )}
            label="Hukum & Kriminal"
            onPress={() => {
              props.navigation.navigate('HukumKriminal');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="glasses" color={color} size={size} />
            )}
            label="Teropong"
            onPress={() => {
              props.navigation.navigate('Teropong');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="run" color={color} size={size} />
            )}
            label="Olahraga"
            onPress={() => {
              props.navigation.navigate('Olahraga');
            }}
          />

          <DrawerItem
            icon={({color, size}) => (
              <Icon name="laptop-mac" color={color} size={size} />
            )}
            label="Lifestyle & Teknologi"
            onPress={() => {
              props.navigation.navigate('Lifestyle');
            }}
          />

          <DrawerItem
            icon={({color, size}) => (
              <Icon name="lightbulb-on-outline" color={color} size={size} />
            )}
            label="Opini"
            onPress={() => {
              props.navigation.navigate('Opini');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="human-male-female" color={color} size={size} />
            )}
            label="Selebriti"
            onPress={() => {
              props.navigation.navigate('Show & Selebriti');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="alpha-k-circle" color={color} size={size} />
            )}
            label="Liputan Khusus"
            onPress={() => {
              props.navigation.navigate('LiputanKhusus');
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
