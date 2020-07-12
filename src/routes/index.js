import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {News, Splash, Article, Digital, Kawanua360, Video} from '../screens';
import BottomNavigator from '../components/molecules/BottomNavigator';

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
    </Stack.Navigator>
  );
};

export default Routes;
