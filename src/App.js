import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import store from './redux/store';
import {YellowBox} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {showError, navigationRef, navigate} from './utils';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import Axios from 'axios';

const getArticle = async (post_id) => {
  let url = `https://manadopost.jawapos.com/wp-json/wp/v2/posts/${post_id}`;
  const response = await Axios.get(url);
  return response.data;
};

PushNotification.configure({
  // onRegister: function (token) {
  //   console.log('TOKEN:', token);
  // },
  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: (notification) => {
    if (!notification.foreground) {
      getArticle(notification.id).then((res) => {
        const data = {
          image: res.jetpack_featured_media_url,
          title: res.title.rendered,
          date: res.date,
          desc: res.excerpt.rendered,
          content: res.content.rendered,
          related: res['jetpack-related-posts'],
          link: res.link,
          ads: [],
        };

        navigate('Article', data);
      });
    }
    // (required) Called when a remote is received or opened, or local notification is opened
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  popInitialNotification: true,
  requestPermissions: true,
});

const MainApp = () => {
  YellowBox.ignoreWarnings(['Setting a timer']);
  console.disableYellowBox = true;

  useEffect(() => {
    //Foreground
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      showError('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
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
