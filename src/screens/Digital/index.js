import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Header, MagazineCard, Title} from '../../components';
import {Fire} from '../../config';
import {colors} from '../../utils';
import DateTimePicker from '@react-native-community/datetimepicker';

const Digital = ({route, navigation}) => {
  const {title} = route.params;
  const [magazine, setMagazine] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    Fire.database()
      .ref('magazines/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          setMagazine(res.val());
        }
      });
  }, []);

  const onChangeDate = (event, selectedDate) => {
    console.log('event, ', event);
    console.log('selected Date, ', selectedDate);
    setShow(false);
  };

  const onPress = () => {
    setShow(true);
  };

  return (
    <View style={styles.screen}>
      <Header
        type="logo-profile"
        onPressUserProfile={() => navigation.navigate('UserProfile')}
      />
      <Title title={title} search onPress={onPress} />
      {show && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {magazine.map((item) => (
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
