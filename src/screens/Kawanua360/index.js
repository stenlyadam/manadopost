import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CategoryCard, Header, Title, Notification} from '../../components';
import {colors} from '../../utils';
import {useSelector} from 'react-redux';

const Kawanua360 = ({route, navigation}) => {
  const {title} = route.params;

  const login = useSelector((state) => state.login);

  if (!login) {
    return (
      <View style={styles.screen}>
        <Header
          type="logo-profile"
          onPressUserProfile={() => navigation.navigate('UserProfile')}
        />
        <Title title={title} />
        <Notification
          title={`Silahkan login terlebih dahulu untuk dapat mengakses menu ${title}`}
        />
      </View>
    );
  }

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
            navigation.navigate('ChooseLocation', {
              title: title,
              subTitle: 'Aerial',
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
        <CategoryCard
          title="Rekreasi"
          type="rekreasi"
          onPress={() =>
            navigation.navigate('ChooseLocation', {
              title: title,
              subTitle: 'Rekreasi',
              category: 'Rekreasi',
            })
          }
        />
        <CategoryCard
          title="Olahraga & Dive"
          type="sport"
          onPress={() =>
            navigation.navigate('ChooseLocation', {
              title: title,
              subTitle: 'Olahraga & Dive',
              category: 'Olahraga',
            })
          }
        />
        <CategoryCard
          title="Budaya"
          type="budaya"
          onPress={() =>
            navigation.navigate('ChooseLocation', {
              title: title,
              subTitle: 'Budaya',
              category: 'Budaya',
            })
          }
        />
        <CategoryCard
          title="Belanja"
          type="shop"
          onPress={() =>
            navigation.navigate('ChooseLocation', {
              title: title,
              subTitle: 'Belanja',
              category: 'Belanja',
            })
          }
        />
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
