import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};

export default App;
