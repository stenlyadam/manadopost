import React from 'react';
import {StyleSheet} from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';

const WebView = ({content}) => {
  return (
    <AutoHeightWebView
      style={styles.webView}
      source={{html: content}}
      scrollEnabled={false}
      scalesPageToFit={true}
      viewportContent={'width=device-width, user-scalable=no'}
      customStyle={`
      p {
        font-size: 14px;
      }
    `}
    />
  );
};

export default WebView;

const styles = StyleSheet.create({
  webView: {
    width: '100%',
    marginTop: 5,
  },
});
