import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import RecipeForm from '../pages/RecipeForm';
import LevelForm from '../pages/LevelForm';
import Recipes from '../pages/Recipes';
import PrepareMode from '../pages/PrepareMode';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}
    >
      <Stack.Screen name="RecipeForm" component={RecipeForm} />
      <Stack.Screen name="LevelForm" component={LevelForm} />
      <Stack.Screen name="Recipes" component={Recipes} />
      <Stack.Screen name="PrepareMode" component={PrepareMode} />
    </Stack.Navigator>
  );
};

export default Routes;
