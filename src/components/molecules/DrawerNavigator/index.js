import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {Profile} from '..';
import {colors} from '../../../utils';
import {Button} from '../../atoms';

const index = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const login = useSelector((state) => state.login);

  return (
    <View style={styles.container}>
      <View style={styles.drawerSection}>
        {login && (
          <Profile onPress={() => props.navigation.navigate('UserProfile')} />
        )}
        {!login && (
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
            label="Show & Selebriti"
            onPress={() => {
              props.navigation.navigate('Selebriti');
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
    marginBottom: 10,
  },
  signIn: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});
