import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Feed from '../pages/Feed';
import OtherUser from '../pages/OtherUser';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        headerShown: false,
      }}
    >
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="OtherUser" component={OtherUser} />
    </Stack.Navigator>
  );
};

export default Routes;
