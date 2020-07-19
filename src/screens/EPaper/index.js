import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {DummyKoran1, DummyKoran2, DummyKoran3, DummyKoran4} from '../../assets';
import {Header, MagazineCard, Title} from '../../components';
import {colors} from '../../utils';

const EPaper = ({route, navigation}) => {
  const {title} = route.params;
  return (
    <View style={styles.screen}>
      <Header
        type="logo-only"
        onPressUserProfile={() => navigation.navigate('UserProfile')}
      />
      <Title title={title} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <MagazineCard image={DummyKoran1} />
          <MagazineCard image={DummyKoran2} />
          <MagazineCard image={DummyKoran3} />
          <MagazineCard image={DummyKoran4} />
          <MagazineCard image={DummyKoran1} />
          <MagazineCard image={DummyKoran2} />
          <MagazineCard image={DummyKoran3} />
          <MagazineCard image={DummyKoran4} />
        </View>
      </ScrollView>
    </View>
  );
};

export default EPaper;

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
