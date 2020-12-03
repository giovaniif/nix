import React from 'react';
import { StatusBar } from 'react-native';
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

import AppContext from './src/hooks';

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
    <AppContext>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
        <Routes />
      </NavigationContainer>
    </AppContext>
  );
}

export default App;
