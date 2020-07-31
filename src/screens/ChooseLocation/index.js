/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LocationCard, Title} from '../../components';
import {colors, fonts} from '../../utils';
import {Fire} from '../../config';

const index = ({navigation, route}) => {
  const {title, subTitle, category} = route.params;

  const [location, setLocation] = useState([]);

  useEffect(() => {
    Fire.database()
      .ref('kawanua360/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          const data = res.val().filter((el) => {
            return el.category === category;
          });
          setLocation(data);
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(location);
  return (
    <View style={styles.screen}>
      <Title title={title} />
      <Text style={styles.subTitle}> {subTitle}</Text>
      <View style={styles.content}>
        {location.map((item) => {
          return (
            <LocationCard
              key={item.id}
              title={item.site_name}
              thumbnail={item.thumbnail}
              onPress={() =>
                navigation.navigate('Explore360', {title: title, data: item})
              }
            />
          );
        })}
      </View>
    </View>
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
  },
});
