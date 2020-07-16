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
import {Button} from '../components';

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
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainApp} />
    </Drawer.Navigator>
  );
};

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="MP News" component={News} />
      <Tab.Screen name="MP Digital" component={Digital} />
      <Tab.Screen name="MP Koran" component={EPaper} />
      <Tab.Screen name="MP 360" component={Kawanua360} />
      <Tab.Screen name="MP Video" component={Video} />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="UserProfile">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
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
