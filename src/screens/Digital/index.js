import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  DummyMagazine1,
  DummyMagazine2,
  DummyMagazine3,
  DummyMagazine4,
  JSONDigital,
} from '../../assets';
import {Header, MagazineCard, Title} from '../../components';
import {colors} from '../../utils';

const Digital = ({route, navigation}) => {
  const {title} = route.params;
  return (
    <View style={styles.screen}>
      <Header
        type="logo-only"
        onPressUserProfile={() => navigation.navigate('UserProfile')}
      />
      <Title title={title} search />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {JSONDigital.data.map((item) => (
            <MagazineCard
              key={item.id}
              image={DummyMagazine1}
              onPress={() =>
                navigation.navigate('ReadMagazine', {
                  uri: item.uri,
                  title: title,
                })
              }
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Digital;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
});
