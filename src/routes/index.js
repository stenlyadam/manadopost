import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BottomNavigator from '../components/molecules/BottomNavigator';
import {Article, Digital, Kawanua360, News, Splash, Video} from '../screens';
import BeritaUtama from '../screens/BeritaUtama';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Digital" component={Digital} />
      <Tab.Screen name="Kawanua360" component={Kawanua360} />
      <Tab.Screen name="Video" component={Video} />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
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
        name="BeritaUtama"
        component={BeritaUtama}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routes;
