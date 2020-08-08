import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {YellowBox} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import store from './redux/store';
import Routes from './routes';
import {navigationRef} from './utils';

const MainApp = () => {
  YellowBox.ignoreWarnings(['Setting a timer']);
  console.disableYellowBox = true;

  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Routes />
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
