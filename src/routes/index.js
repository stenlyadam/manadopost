import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import BottomNavigator from '../components/molecules/BottomNavigator';
import {
  Article,
  Digital,
  Kawanua360,
  News,
  Splash,
  Video,
  EPaper,
  Login,
  Register,
  UserProfile,
  EditProfile,
} from '../screens';
import {ILLogo} from '../assets';
import {colors} from '../utils';
import {Button, DrawerNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const headerArtikelConf = ({navigation}) => {
  return {
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTitle: () => <ILLogo />,
    headerLeft: () => (
      <Button
        type="icon-only"
        icon="arrow-back"
        onPress={() => navigation.goBack()}
      />
    ),
  };
};

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerNavigator {...props} />}>
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
      <Tab.Screen name="MP Koran" component={EPaper} />
      <Tab.Screen name="MP 360" component={Kawanua360} />
      <Tab.Screen name="MP Video" component={Video} />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={headerArtikelConf}
      />
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
        options={headerArtikelConf}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={headerArtikelConf}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={headerArtikelConf}
      />
    </Stack.Navigator>
  );
};

export default Routes;
