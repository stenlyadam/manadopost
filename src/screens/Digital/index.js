import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  DummyMagazine1,
  DummyMagazine2,
  DummyMagazine3,
  DummyMagazine4,
} from '../../assets';
import {Header, MagazineCard, Title} from '../../components';
import {colors} from '../../utils';

const Digital = ({route}) => {
  const {title} = route.params;
  return (
    <View style={styles.screen}>
      <Header type="logo-only" />
      <Title title={title} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <MagazineCard image={DummyMagazine1} />
          <MagazineCard image={DummyMagazine2} />
          <MagazineCard image={DummyMagazine3} />
          <MagazineCard image={DummyMagazine4} />
          <MagazineCard image={DummyMagazine1} />
          <MagazineCard image={DummyMagazine2} />
          <MagazineCard image={DummyMagazine3} />
          <MagazineCard image={DummyMagazine4} />
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
