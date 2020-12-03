import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Profile from '../pages/Profile';
import EditProfileInfo from '../pages/EditProfileInfo';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfileInfo" component={EditProfileInfo} />
    </Stack.Navigator>
  );
};

export default Routes;
