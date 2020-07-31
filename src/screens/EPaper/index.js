import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Header, MagazineCard, Title, Notification} from '../../components';
import {Fire} from '../../config';
import {colors} from '../../utils';
import {useSelector} from 'react-redux';

const EPaper = ({route, navigation}) => {
  const [epaper, setEpaper] = useState([]);
  const {title} = route.params;
  const login = useSelector((state) => state.login);

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
