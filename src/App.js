import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {YellowBox} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import store from './redux/store';
import Routes from './routes';
import {navigationRef, storeData} from './utils';
import IAP from 'react-native-iap';

const MainApp = () => {
  YellowBox.ignoreWarnings(['Setting a timer']);
  console.disableYellowBox = true;

  const productIds = ['1_bulan', '6_bulan', '1_tahun'];

  useEffect(() => {
    //initialize in-app purchase
    (async function intialize() {
      try {
        await IAP.initConnection();
        //Make all products consumable
        await IAP.consumeAllItemsAndroid();
      } catch (err) {}
    })();
    //Store to local storage
    IAP.getProducts(productIds).then((res) => {
      storeData('productAppStore', res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
