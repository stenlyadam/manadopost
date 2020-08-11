/* eslint-disable react-hooks/exhaustive-deps */
import auth from '@react-native-firebase/auth';
import Moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import IAP from 'react-native-iap';
import {useDispatch} from 'react-redux';
import {ILPaper} from '../../assets';
import {Button, Loading, Profile} from '../../components';
import {Fire} from '../../config';
import {
  colors,
  fonts,
  getData,
  getProductTitle,
  showError,
  storeData,
} from '../../utils';

const UserProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // const productIds = ['1_bulan', '6_bulan', '1_tahun'];
  const [products, setProducts] = useState([]);

  let purchaseUpdateSubscription;
  let purchaseErrorSubscription;

  useEffect(() => {
    (async function intialize() {
      try {
        await IAP.initConnection();
        //Make all products consumable
        await IAP.consumeAllItemsAndroid();
      } catch (err) {}
    })();

    // IAP.getProducts(productIds).then((resProduct) => {
    //   setProducts(resProduct);
    // });

    //Get data product from local storage
    getData('productAppStore').then((res) => {
      setProducts(res);
    });

    purchaseUpdateSubscription = IAP.purchaseUpdatedListener((purchase) => {
      const receipt = purchase.transactionReceipt;
      if (receipt) {
        const receiptJSON = JSON.parse(receipt);
        const dateReceipt = Moment(receiptJSON.purchaseTime);
        let expirationDate = dateReceipt;

        if (receiptJSON.productId === '1_bulan') {
          expirationDate = expirationDate.add(1, 'M').format('LLL');
        } else if (receiptJSON.productId === '6_bulan') {
          expirationDate = expirationDate.add(6, 'M').format('LLL');
        } else {
          expirationDate = expirationDate.add(12, 'M').format('LLL');
        }

        const data = {
          isSubscribed: true,
          orderId: receiptJSON.orderId,
          productId: receiptJSON.productId,
          purchaseDate: Moment(receiptJSON.purchaseTime).format('LLL'),
          expireDate: expirationDate,
        };

        IAP.finishTransaction(purchase).then(() => {
          getData('user').then((resUser) => {
            //Save to firebase
            Fire.database()
              .ref(`users/${resUser.uid}`)
              .update({subscription: data});

            const dataUser = resUser;
            dataUser.subscription = data;
            //Store data with subscription in local storage
            storeData('user', dataUser);
          });
        });
      }
    });

    purchaseErrorSubscription = IAP.purchaseErrorListener((purchaseError) => {
      showError(JSON.stringify(purchaseError));
    });

    return () => {
      if (purchaseUpdateSubscription) {
        purchaseUpdateSubscription.remove();
        purchaseUpdateSubscription = null;
      }
      if (purchaseErrorSubscription) {
        purchaseErrorSubscription.remove();
        purchaseErrorSubscription = null;
      }
      IAP.endConnection();
    };
  }, []);

  const signOut = () => {
    setLoading(true);
    auth()
      .signOut()
      .then(() => {
        setLoading(false);
        dispatch({type: 'SET_LOGIN', value: false});
        navigation.replace('MainApp');
      })
      .catch((err) => {
        setLoading(false);
        showError(err.message);
      });
  };

  return (
    <>
      <View style={styles.screen}>
        <Profile viewOnly />
        <Button
          title="Edit akun"
          onPress={() => navigation.navigate('EditProfile')}
        />
        <View style={styles.content}>
          <View>
            <Text style={styles.contentText}>
              Berlangganan Manado Post Digital Premium:
            </Text>
            <Text style={styles.contentText}>
              {' '}
              - Akses e-Koran terupdate setiap hari
            </Text>
            <Text style={styles.contentText}>
              {' '}
              - Berhak mendapatkan Undian yang di Undi setiap bulan{' '}
            </Text>
            <Text style={styles.contentText}> - Mendapatkan promo khusus </Text>
          </View>
          <View style={styles.image}>
            <Image source={ILPaper} />
          </View>
          <View style={styles.subscribe}>
            {products.map((item) => {
              return (
                <Button
                  key={item.productId}
                  type="button-subscribe"
                  title={getProductTitle(item.productId)}
                  price={item.localizedPrice}
                  onPress={() => {
                    IAP.requestPurchase(item.productId).catch((error) =>
                      showError(error.message),
                    );
                  }}
                />
              );
            })}
          </View>
          <Button title="Logout" onPress={signOut} />
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  wrapperProfile: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 18,
    alignItems: 'center',
  },
  avatar: {
    height: 72,
    width: 72,
    borderRadius: 72 / 2,
    marginRight: 12,
  },
  subscribe: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  name: {
    fontFamily: fonts.primary[700],
    fontSize: 18,
    color: colors.primary,
  },
  email: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.text.secondary,
  },
  desc: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.primary,
  },
  image: {
    alignItems: 'center',
    marginBottom: 15,
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
    marginTop: 5,
  },
  contentText: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.text.primary,
  },
});
