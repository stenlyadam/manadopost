import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {Profile} from '..';
import {IconMP} from '../../../assets';
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
        <View style={styles.drawerSection}>
          <DrawerItem
            icon={() => (
              <View style={styles.icon}>
                <IconMP />
              </View>
            )}
            label="Gorontalo Post"
            onPress={() => {
              props.navigation.navigate('GorontaloPost');
            }}
          />
          <DrawerItem
            icon={() => (
              <View style={styles.icon}>
                <IconMP />
              </View>
            )}
            label="Bitung"
            onPress={() => {
              props.navigation.navigate('Bitung');
            }}
          />
          <DrawerItem
            icon={() => (
              <View style={styles.icon}>
                <IconMP />
              </View>
            )}
            label="Tomohon"
            onPress={() => {
              props.navigation.navigate('Tomohon');
            }}
          />
        </View>
        <View style={styles.drawerSection}>
          <DrawerItem
            icon={() => (
              <View style={styles.icon}>
                <IconMP />
              </View>
            )}
            label="Minahasa Raya"
            onPress={() => {
              props.navigation.navigate('Minahasa');
            }}
          />
          <DrawerItem
            icon={() => (
              <View style={styles.icon}>
                <IconMP />
              </View>
            )}
            label="Minahasa Utara"
            onPress={() => {
              props.navigation.navigate('MinahasaUtara');
            }}
          />
          <DrawerItem
            icon={() => (
              <View style={styles.icon}>
                <IconMP />
              </View>
            )}
            label="Minahasa Selatan"
            onPress={() => {
              props.navigation.navigate('MinahasaSelatan');
            }}
          />
          <DrawerItem
            icon={() => (
              <View style={styles.icon}>
                <IconMP />
              </View>
            )}
            label="Minahasa Tenggara"
            onPress={() => {
              props.navigation.navigate('MinahasaTenggara');
            }}
          />
        </View>
        <View style={styles.drawerSection}>
          <DrawerItem
            icon={() => (
              <View style={styles.icon}>
                <IconMP />
              </View>
            )}
            label="Bolmong"
            onPress={() => {
              props.navigation.navigate('Bolmong');
            }}
          />
          <DrawerItem
            icon={() => (
              <View style={styles.icon}>
                <IconMP />
              </View>
            )}
            label="Bolmut"
            onPress={() => {
              props.navigation.navigate('Bolmut');
            }}
          />
          <DrawerItem
            icon={() => (
              <View style={styles.icon}>
                <IconMP />
              </View>
            )}
            label="Boltim"
            onPress={() => {
              props.navigation.navigate('Boltim');
            }}
          />
          <DrawerItem
            icon={() => (
              <View style={styles.icon}>
                <IconMP />
              </View>
            )}
            label="Bolsel"
            onPress={() => {
              props.navigation.navigate('Bolsel');
            }}
          />
          <DrawerItem
            icon={() => (
              <View style={styles.icon}>
                <IconMP />
              </View>
            )}
            label="Kotamobagu"
            onPress={() => {
              props.navigation.navigate('Kotamobagu');
            }}
          />
        </View>
        <View style={styles.drawerSection}>
          <DrawerItem
            icon={() => (
              <View style={styles.icon}>
                <IconMP />
              </View>
            )}
            label="Nusa Utara"
            onPress={() => {
              props.navigation.navigate('NusaUtara');
            }}
          />
          <DrawerItem
            icon={() => (
              <View style={styles.icon}>
                <IconMP />
              </View>
            )}
            label="Sangihe"
            onPress={() => {
              props.navigation.navigate('Sangihe');
            }}
          />
          <DrawerItem
            icon={() => (
              <View style={styles.icon}>
                <IconMP />
              </View>
            )}
            label="Sitaro"
            onPress={() => {
              props.navigation.navigate('Sitaro');
            }}
          />
          <DrawerItem
            icon={() => (
              <View style={styles.icon}>
                <IconMP />
              </View>
            )}
            label="Talaud"
            onPress={() => {
              props.navigation.navigate('Talaud');
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
  icon: {
    paddingLeft: 5,
  },
});
