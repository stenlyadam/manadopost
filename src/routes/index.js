import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Latest, Splash} from '../screens';
import Article from '../screens/Article';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Latest"
        component={Latest}
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
