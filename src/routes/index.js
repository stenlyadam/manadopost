import messaging from '@react-native-firebase/messaging';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Image, StyleSheet} from 'react-native';
import {ILLogoPNG} from '../assets';
import {Button, DrawerNavigator} from '../components';
import BottomNavigator from '../components/molecules/BottomNavigator';
import {
  About,
  Article,
  ChooseLocation,
  Digital,
  EditProfile,
  EPaper,
  Explore360,
  Homepage,
  Kawanua360,
  Login,
  News,
  ReadMagazine,
  Register,
  Search,
  Splash,
  TermAndCondition,
  UserProfile,
  Video,
} from '../screens';
import {colors, navigate} from '../utils';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const headerConf = ({navigation}) => {
  return {
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTitle: () => <Image source={ILLogoPNG} style={styles.logo} />,
    headerLeft: () => (
      <Button
        type="icon-only"
        icon="arrow-back"
        onPress={() => navigation.goBack()}
      />
    ),
  };
};
const styles = StyleSheet.create({
  logo: {
    height: 27,
    width: 200,
  },
});

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerNavigator {...props} />}>
      <Drawer.Screen
        name="Beranda"
        component={Homepage}
        initialParams={{category: 129}}
      />
      <Drawer.Screen
        name="BeritaTerbaru"
        component={News}
        initialParams={{category: 70}}
      />
      <Drawer.Screen
        name="BeritaUtama"
        component={News}
        initialParams={{category: 129, title: 'Berita Utama'}}
      />
      <Drawer.Screen
        name="Ekbis"
        component={News}
        initialParams={{category: 46, title: 'Ekonomi & Bisnis'}}
      />
      <Drawer.Screen
        name="Polbub"
        component={News}
        initialParams={{category: 47, title: 'Politik & Publika'}}
      />
      <Drawer.Screen
        name="Nasional"
        component={News}
        initialParams={{category: 130, title: 'Nasional'}}
      />
      <Drawer.Screen
        name="Internasional"
        component={News}
        initialParams={{category: 133, title: 'Internasional'}}
      />
      <Drawer.Screen
        name="HukumKriminal"
        component={News}
        initialParams={{category: 48, title: 'Hukum & Kriminal'}}
      />
      <Drawer.Screen
        name="Teropong"
        component={News}
        initialParams={{category: 119, title: 'Teropong'}}
      />
      <Drawer.Screen
        name="Olahraga"
        component={News}
        initialParams={{category: 65, title: 'Olahraga'}}
      />
      <Drawer.Screen
        name="Kawanuapolis"
        component={News}
        initialParams={{category: 132, title: 'Kawanuapolis'}}
      />
      <Drawer.Screen
        name="Lifestyle"
        component={News}
        initialParams={{category: 66, title: 'Lifestyle & Teknologi'}}
      />
      <Drawer.Screen
        name="LiputanKhusus"
        component={News}
        initialParams={{category: 67, title: 'Liputan Khusus'}}
      />
      <Drawer.Screen
        name="Opini"
        component={News}
        initialParams={{category: 68, title: 'Opini'}}
      />
      <Drawer.Screen
        name="Selebriti"
        component={News}
        initialParams={{category: 69, title: 'Show & Selebriti'}}
      />
      <Drawer.Screen
        name="GorontaloPost"
        component={News}
        initialParams={{category: 64, title: 'Gorontalo Post'}}
      />
      <Drawer.Screen
        name="Minahasa"
        component={News}
        initialParams={{category: 131, title: 'Minahasa'}}
      />
      <Drawer.Screen
        name="MinahasaUtara"
        component={News}
        initialParams={{category: 31, title: 'Minahasa Utara'}}
      />
      <Drawer.Screen
        name="MinahasaSelatan"
        component={News}
        initialParams={{category: 51, title: 'Minahasa Selatan'}}
      />
      <Drawer.Screen
        name="MinahasaTenggara"
        component={News}
        initialParams={{category: 52, title: 'Minahasa Tenggara'}}
      />
      <Drawer.Screen
        name="Bitung"
        component={News}
        initialParams={{category: 49, title: 'Bitung'}}
      />
      <Drawer.Screen
        name="Tomohon"
        component={News}
        initialParams={{category: 53, title: 'Tomohon'}}
      />
      <Drawer.Screen
        name="Bolmong"
        component={News}
        initialParams={{category: 55, title: 'Bolmong'}}
      />
      <Drawer.Screen
        name="Bolmut"
        component={News}
        initialParams={{category: 1396, title: 'Bolmut'}}
      />
      <Drawer.Screen
        name="Boltim"
        component={News}
        initialParams={{category: 57, title: 'Boltim'}}
      />
      <Drawer.Screen
        name="Bolsel"
        component={News}
        initialParams={{category: 58, title: 'Bolsel'}}
      />
      <Drawer.Screen
        name="Kotamobagu"
        component={News}
        initialParams={{category: 59, title: 'Kotamobagu'}}
      />
      <Drawer.Screen
        name="Sangihe"
        component={News}
        initialParams={{category: 61, title: 'Sangihe'}}
      />
      <Drawer.Screen
        name="Sitaro"
        component={News}
        initialParams={{category: 62, title: 'Sitaro'}}
      />
      <Drawer.Screen
        name="Talaud"
        component={News}
        initialParams={{category: 63, title: 'Talaud'}}
      />
    </Drawer.Navigator>
  );
};

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="MP News" component={DrawerRoutes} />
      <Tab.Screen
        name="MP Digital"
        component={Digital}
        initialParams={{title: 'MP Digital'}}
      />
      <Tab.Screen
        name="MP Koran"
        component={EPaper}
        initialParams={{title: 'MP Koran'}}
      />
      <Tab.Screen
        name="MP 360"
        component={Kawanua360}
        initialParams={{title: 'Kawanua 360'}}
      />
      <Tab.Screen
        name="MP Video"
        component={Video}
        initialParams={{title: 'MP Video'}}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  useEffect(() => {
    //Foreground
    // messaging().onMessage(async (remoteMessage) => {
    //   console.log('A new FCM message arrived!', remoteMessage);
    // });
    messaging().onNotificationOpenedApp((remoteMessage) => {
      // console.log(
      //   'Notification caused app to open from background state:',
      //   remoteMessage,
      // );
      const data = {
        image: remoteMessage.data.image,
        title: remoteMessage.notification.title,
        date: remoteMessage.data.date,
        desc: remoteMessage.data.desc,
        content: remoteMessage.data.content,
        link: remoteMessage.data.link,
        ads: [],
      };
      navigate('Article', data);
    });

    // return unsubscribe;
  }, []);

  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Login" component={Login} options={headerConf} />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Article"
        component={Article}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={headerConf}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={headerConf}
      />
      <Stack.Screen
        name="ReadMagazine"
        component={ReadMagazine}
        options={headerConf}
      />
      <Stack.Screen
        name="TermAndCondition"
        component={TermAndCondition}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Search" component={Search} options={headerConf} />
      <Stack.Screen
        name="Explore360"
        component={Explore360}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChooseLocation"
        component={ChooseLocation}
        options={headerConf}
      />
      <Stack.Screen name="About" component={About} options={headerConf} />
    </Stack.Navigator>
  );
};

export default Routes;
