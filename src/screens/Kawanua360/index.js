import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {CategoryCard, Header, Title} from '../../components';
import {colors} from '../../utils';
import {Fire} from '../../config';

const Kawanua360 = ({route, navigation}) => {
  const [aerial, setAerial] = useState([]);

  useEffect(() => {
    Fire.database()
      .ref('kawanua360')
      .once('value')
      .then((res) => {
        const data = res.val().filter((el) => {
          return el.category === 'Aerial';
        });
        setAerial(data);
      });
  }, []);

  const {title} = route.params;
  return (
    <View style={styles.screen}>
      <Header
        type="logo-profile"
        onPressUserProfile={() => navigation.navigate('UserProfile')}
      />
      <Title title={title} />

      <View style={styles.content}>
        <CategoryCard
          title="Tampilan Udara"
          type="aerial"
          onPress={() =>
            navigation.navigate('Explore360', {
              title: title,
              data: aerial,
              category: 'Aerial',
            })
          }
        />
        <CategoryCard
          title="Hotel & Resort"
          type="hotel"
          onPress={() =>
            navigation.navigate('ChooseLocation', {
              title: title,
              subTitle: 'Hotel & Resort',
              category: 'Hotel',
            })
          }
        />
        {/* <CategoryCard title="Rekreasi" type="rekreasi" />
        <CategoryCard title="Belanja" type="shop" />
        <CategoryCard title="Olahraga & Dive" type="sport" />
        <CategoryCard title="Budaya" type="budaya" /> */}
      </View>
    </View>
  );
};

export default Kawanua360;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
