import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Gap, Header, MagazineCard, MenuHeader, Title} from '../../components';
import {colors} from '../../utils';

const Latest = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.headerWrapper}>
        <Header />
        <Gap height={2} />
        <MenuHeader />
      </View>
      <Title title="Magazine E-Paper" />
      <View style={styles.content}>
        <MagazineCard />
        <MagazineCard />
      </View>
      <View style={styles.content}>
        <MagazineCard />
        <MagazineCard />
      </View>
    </View>
  );
};

export default Latest;

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: colors.blueBackground1,
  },
  content: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
