/* eslint-disable react-hooks/rules-of-hooks */
import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {LocationCard, Title, Header} from '../../components';
import {colors, fonts} from '../../utils';

const index = ({navigation, route}) => {
  const {title, subTitle, category, city} = route.params;

  const [location, setLocation] = useState([]);

  const getLocation = async () => {
    let url = 'http://api.mpdigital.id/kawanua360';
    const response = await Axios.get(url);
    let filteredData = response.data.filter((el) => {
      if (city === 'All') {
        return el.category === category;
      } else {
        return el.category === category && el.kota_kabupaten === city;
      }
    });
    return filteredData;
  };

  useEffect(() => {
    getLocation().then((res) => {
      setLocation(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header type="back-only" onPressBack={() => navigation.goBack()} />
      <View style={styles.screen}>
        <Title title={title} />
        <Text style={styles.subTitle}> {`${subTitle} ${city}`}</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            {location.map((item) => {
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
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.cardBackground,
  },

  webView: {
    flex: 3,
  },
  desc: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    fontSize: 14,
    textAlign: 'justify',
  },
  subTitle: {
    textAlign: 'center',
    paddingVertical: 15,
    fontFamily: fonts.primary[700],
    fontSize: 14,
    color: colors.text.primary,
  },
  content: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
