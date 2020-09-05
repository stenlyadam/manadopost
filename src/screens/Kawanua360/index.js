import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {
  CategoryCard,
  Header,
  Title,
  Notification,
  LocationCard,
} from '../../components';
import {colors} from '../../utils';
import {useSelector} from 'react-redux';
import {Picker} from '@react-native-community/picker';
import Axios from 'axios';

const Kawanua360 = ({route, navigation}) => {
  const {title} = route.params;
  const [city, setCity] = useState('Manado');
  const [tour, setTour] = useState([]);
  const [trending, setTrending] = useState([]);

  const login = useSelector((state) => state.login);

  const getTour = async () => {
    let url = 'http://api.mpdigital.id/kawanua360';
    const response = await Axios.get(url);
    let filteredData = response.data.filter((el) => {
      return el.category === 'Tour';
    });
    return filteredData;
  };

  const getTrending = async () => {
    let url = 'http://api.mpdigital.id/kawanua360';
    const response = await Axios.get(url);
    let filteredData = response.data.filter((el) => {
      return el.trending === '1';
    });
    return filteredData;
  };

  useEffect(() => {
    getTour().then((res) => {
      setTour(res);
    });
    getTrending().then((res) => {
      setTrending(res);
    });
  }, []);

  const onRefresh = () => {
    getTour().then((res) => {
      setTour(res);
    });
    getTrending().then((res) => {
      setTrending(res);
    });
  };

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

      <Picker
        selectedValue={city}
        style={styles.picker}
        onValueChange={(itemValue) => setCity(itemValue)}>
        <Picker.Item label="All" value="All" />
        <Picker.Item label="Manado" value="Manado" />
        <Picker.Item label="Tomohon" value="Tomohon" />
        <Picker.Item label="Bitung" value="Bitung" />
        <Picker.Item label="Minahasa" value="Minahasa" />
        <Picker.Item label="Minahasa Selatan" value="Minahasa Selatan" />
        <Picker.Item label="Minahasa Utara" value="Minahasa Utara" />
        <Picker.Item label="Minahasa Tenggara" value="Minahasa Tenggara" />
        <Picker.Item label="Bolmong" value="Bolmong" />
        <Picker.Item label="Kotamobagu" value="Kotamobagu" />
        <Picker.Item label="Talaud" value="Talaud" />
      </Picker>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <CategoryCard
            title="Tampilan Udara"
            type="aerial"
            onPress={() =>
              navigation.navigate('ChooseLocation', {
                title: title,
                subTitle: 'Aerial',
                category: 'Aerial',
                city: city,
              })
            }
          />
          <CategoryCard
            title="Hotel & Resort"
            type="hotel"
            onPress={() =>
              navigation.navigate('ChooseLocation', {
                title: title,
                subTitle: 'Hotel & Resort',
                category: 'Hotel',
                city: city,
              })
            }
          />
          <CategoryCard
            title="Rekreasi"
            type="rekreasi"
            onPress={() =>
              navigation.navigate('ChooseLocation', {
                title: title,
                subTitle: 'Rekreasi',
                category: 'Rekreasi',
                city: city,
              })
            }
          />
          <CategoryCard
            title="Olahraga & Dive"
            type="sport"
            onPress={() =>
              navigation.navigate('ChooseLocation', {
                title: title,
                subTitle: 'Olahraga & Dive',
                category: 'Dive',
                city: city,
              })
            }
          />
          <CategoryCard
            title="Budaya"
            type="budaya"
            onPress={() =>
              navigation.navigate('ChooseLocation', {
                title: title,
                subTitle: 'Budaya',
                category: 'Budaya',
                city: city,
              })
            }
          />
          <CategoryCard
            title="Belanja"
            type="shop"
            onPress={() =>
              navigation.navigate('ChooseLocation', {
                title: title,
                subTitle: 'Belanja',
                category: 'Belanja',
                city: city,
              })
            }
          />
        </View>
        <Title title="Virtual Tour" refresh onPress={onRefresh} />
        <View style={styles.tour}>
          {tour.map((item) => {
            return (
              <LocationCard
                key={item.id}
                fullWidth
                title={item.site_name}
                thumbnail={item.thumbnail}
                onPress={() =>
                  navigation.navigate('Explore360', {
                    title: title,
                    data: item,
                  })
                }
              />
            );
          })}
        </View>
        <Title title="Trending" refresh onPress={onRefresh} />
        <View style={styles.trending}>
          {trending.map((item) => {
            return (
              <LocationCard
                key={item.id}
                title={item.site_name}
                thumbnail={item.thumbnail}
                onPress={() =>
                  navigation.navigate('Explore360', {
                    title: title,
                    data: item,
                  })
                }
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Kawanua360;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.cardBackground,
  },
  content: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: colors.cardBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tour: {
    marginVertical: 10,
  },
  trending: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
