import DateTimePicker from '@react-native-community/datetimepicker';
import Axios from 'axios';
import Moment from 'moment';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Header, MagazineCard, Notification, Title} from '../../components';
import {colors} from '../../utils';

const EPaper = ({route, navigation}) => {
  const [epaper, setEpaper] = useState([]);
  const [show, setShow] = useState(false);
  const {title} = route.params;
  const [refreshing, setRefreshing] = useState(false);
  const login = useSelector((state) => state.login);
  const isSubscribed = useSelector((state) => state.subscription);

  const getEPaper = async () => {
    let url = 'http://api.mpdigital.id/mp';
    const response = await Axios.get(url);
    let filteredData = response.data.filter((el) => {
      return el.x_type === 'Koran';
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

  if (!login || !isSubscribed) {
    return (
      <View style={styles.screen}>
        <Header
          type="logo-profile"
          onPressUserProfile={() => navigation.navigate('UserProfile')}
        />
        <Title title={title} />
        <Notification
          title={`Silahkan login dan berlangganan terlebih dahulu untuk dapat mengakses menu ${title}`}
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

export default EPaper;

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
