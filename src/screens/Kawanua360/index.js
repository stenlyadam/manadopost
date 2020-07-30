import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CategoryCard, Header, Title} from '../../components';
import {colors} from '../../utils';

const index = ({navigation, title}) => {
  return (
    <View>
      <Header
        type="logo-profile"
        onPressUserProfile={() => navigation.navigate('UserProfile')}
      />
      <Title title={title} />
      <View style={styles.screen}>
        <CategoryCard
          title="Tampilan Udara"
          type="aerial"
          onPress={() => console.log('test')}
        />
        <CategoryCard
          title="Rekreasi"
          type="rekreasi"
          onPress={() => console.log('test')}
        />
        <CategoryCard
          title="Hotel & Resort"
          type="hotel"
          onPress={() => console.log('test')}
        />
        <CategoryCard
          title="Belanja"
          type="shop"
          onPress={() => console.log('test')}
        />
        <CategoryCard
          title="Olahraga & Dive"
          type="sport"
          onPress={() => console.log('test')}
        />
        <CategoryCard
          title="Budaya"
          type="budaya"
          onPress={() => console.log('test')}
        />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
