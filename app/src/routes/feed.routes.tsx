import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Feed from '../pages/Feed';
import OtherUser from '../pages/OtherUser';
import CreatePost from '../pages/CreatePost';

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
      <Stack.Screen name="CreatePost" component={CreatePost} />
    </Stack.Navigator>
  );
};

export default Routes;
