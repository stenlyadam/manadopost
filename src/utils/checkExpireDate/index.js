import Moment from 'moment';
import {Fire} from '../../config';
import {storeData} from '../localStorage';

export const checkExpireDate = (user) => {
  const expireDate = Moment(user.subscription.expireDate).format();
  const now = Moment().format();

  const data = {
    isSubscribed: false,
    orderId: '',
    productId: '',
    purchaseDate: user.subscription.purchaseDate,
    expireDate: user.subscription.expireDate,
  };

  if (now > expireDate) {
    const dataUser = user;
    dataUser.subscription = data;
    //Save to firebase
    Fire.database().ref(`users/${user.uid}`).update({subscription: data});
    //Store data with subscription in local storage
    storeData('user', dataUser);
    return true;
  }
  return false;
};
