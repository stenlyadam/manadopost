import DateTimePicker from '@react-native-community/datetimepicker';
import Axios from 'axios';
import Moment from 'moment';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Header, MagazineCard, Title} from '../../components';
import {colors} from '../../utils';

const Digital = ({route, navigation}) => {
  const [epaper, setEpaper] = useState([]);
  const [show, setShow] = useState(false);
  const {title} = route.params;
  const [refreshing, setRefreshing] = useState(false);

  const getEPaper = async () => {
    let url = 'http://api.mpdigital.id/mp';
    const response = await Axios.get(url);
    let filteredData = response.data.filter((el) => {
      return el.x_type === 'Digital';
    });
    return filteredData;
  };

  const onChangeDate = async (event, selectedDate) => {
    getEPaper().then((res) => {
      let data = res.filter((el) => {
        return (
          Moment(el.publish_date).format('LL') ===
          Moment(selectedDate).format('LL')
        );
      });
      setEpaper(data);
    });
    setShow(false);
  };

  const onPress = () => {
    setShow(true);
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.content}>
        <MagazineCard
          key={item.id}
          image={{uri: item.thumbnail}}
          date={Moment(item.publish_date).format('LL')}
          onPress={() =>
            navigation.navigate('ReadMagazine', {
              uri: item.pdf_link,
              title: title,
            })
          }
        />
      </View>
    );
  };

  const onRefresh = () => {
    setRefreshing(true);
    getEPaper().then((res) => {
      res.reverse();
      setEpaper(res);
      setRefreshing(false);
    });
  };

  useEffect(() => {
    getEPaper().then((res) => {
      res.reverse();
      setEpaper(res);
    });
  }, []);

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
      <FlatList
        data={epaper.slice(0, 20)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={onRefresh}
        numColumns={2}
      />
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
    flex: 1,
    alignItems: 'center',
  },
});
