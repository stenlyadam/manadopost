import Moment from 'moment';
import {getData, storeData} from '../localStorage';
import {Fire} from '../../config';

export const checkExpireDate = (user) => {
  const expireDate = Moment(user.subscription.expireDate).format();
  const now = Moment().format();

  const data = {
    isSubscribed: false,
    orderId: '',
    productId: '',
    purchaseDate: '',
    expireDate: '',
  };

  if (now > expireDate) {
    getData('user').then((resUser) => {
      const dataUser = resUser;
      dataUser.subscription = data;
      //Save to firebase
      Fire.database().ref(`users/${resUser.uid}`).update({subscription: data});
      //Store data with subscription in local storage
      storeData('user', dataUser);
    });
    return true;
  }
  return false;
};
