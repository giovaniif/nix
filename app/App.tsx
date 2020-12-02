import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import { 
  useFonts, 
  Poppins_600SemiBold, 
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_300Light,
} from '@expo-google-fonts/poppins';

import Routes from './src/routes';

const App = () => {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold, 
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_300Light,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#2C5530" />
      <Routes />
    </NavigationContainer>
  );
}

export default App;