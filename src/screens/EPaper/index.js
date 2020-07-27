import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Header, MagazineCard, Title} from '../../components';
import {Fire} from '../../config';
import {colors} from '../../utils';

const EPaper = ({route, navigation}) => {
  const [epaper, setEpaper] = useState([]);

  useEffect(() => {
    Fire.database()
      .ref('epapers/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          setEpaper(res.val());
        }
      });
  }, []);

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
          {epaper.map((item) => (
            <MagazineCard
              key={item.id}
              image={{uri: item.thumbnail}}
              date={item.date}
              onPress={() =>
                navigation.navigate('ReadMagazine', {
                  uri: item.link,
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
