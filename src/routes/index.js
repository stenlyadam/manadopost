import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
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
} from '../screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
    <Stack.Navigator initialRouteName="MainApp">
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
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routes;
