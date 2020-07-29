import React from 'react';
import {View, StyleSheet, Text, ScrollView, Dimensions} from 'react-native';
import {Header, Title} from '../../components';
import {colors, fonts} from '../../utils';
import {WebView} from 'react-native-webview';

const Kawanua360 = ({navigation, route}) => {
  const {title} = route.params;
  return (
    <View style={styles.screen}>
      <Header
        type="logo-profile"
        onPressUserProfile={() => navigation.navigate('UserProfile')}
      />
      <Title title={title} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <WebView
            source={{
              uri: 'http://kawanua360.com/location/manado/telukmanado/',
            }}
            style={{height: Dimensions.get('window').height}}
          />

          <View style={styles.desc}>
            <Text style={styles.text}>
              Situated in a strategic location at Bahu Mall integrated area
              complete with shopping, commercial, and entertainment facilities
              within easy access to Boulevard area (Manado's number 1 street)
              while Sam Ratulangi International Airport is only 45 minutes
              drive. Best Western The Lagoon Hotel offers perfect spots for
              great adventure ranging from scuba diving named Bunaken National
              Park as one of the best Indonesia’s dive spot, volcano trekking
              tours, white water rafting, to The Tangkoko Nature Reserve. For a
              more relaxing sunny day, visit Pall Beach or Pulisan Beach to
              enjoy the white sand and clear blue water.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Kawanua360;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
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
});
