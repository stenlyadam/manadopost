/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
// import messaging from '@react-native-firebase/messaging';
// import {storeData} from './src/utils';

// // Background
// messaging().setBackgroundMessageHandler(async (remoteMessage) => {
//   console.log('Message handled in the background!', remoteMessage);
//   storeData('notificationID', remoteMessage.messageId);
// });

AppRegistry.registerComponent(appName, () => App);
