import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import store from './redux/store';
import {YellowBox} from 'react-native';

const MainApp = () => {
  YellowBox.ignoreWarnings(['Setting a timer']);
  return (
    <>
      <NavigationContainer>
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
