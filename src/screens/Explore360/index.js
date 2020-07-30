import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {WebView} from 'react-native-webview';
import {Title, Gap} from '../../components';
import {colors, fonts} from '../../utils';
import {ILGoogleMap} from '../../assets';

const Explore360 = ({route}) => {
  const {title, data, category} = route.params;
  let location = data;
  if (category === 'Aerial') {
    location = data[0];
  }
  return (
    <View style={styles.screen}>
      <Title title={title} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <WebView
            source={{
              uri: location.link,
            }}
            style={{height: Dimensions.get('window').height}}
          />
          <View style={styles.desc}>
            <Text style={styles.text}>{location.description}</Text>
            <Gap height={10} />
            <View style={styles.address}>
              <Image source={ILGoogleMap} style={styles.imageAddress} />
              <Text style={styles.text}>{location.address}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Explore360;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    paddingBottom: 20,
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
    flex: 1,
  },
  address: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageAddress: {
    marginRight: 10,
  },
});
