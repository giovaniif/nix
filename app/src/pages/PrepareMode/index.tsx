import React from 'react';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants'

const PrepareMode: React.FC = ({ route }) => {
  const { url } = route.params;
  let { statusBarHeight } = Constants;
  
  return (
    <WebView source={{ uri: url }} style={{
      flex: 1,
      marginTop: statusBarHeight
    }} />
  );
}

export default PrepareMode;