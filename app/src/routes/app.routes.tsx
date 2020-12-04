import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Text } from 'react-native';

import ProfileRoutes from './profile.routes';
import FeedRoutes from './feed.routes';
import RecipeRoutes from './recipes.routes';

const Tabs = createBottomTabNavigator();

const AppRouter: React.FC = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#739E82',
        inactiveTintColor: '#d4d4d4',
        style: {
          height: 62
        }
      }}
    >
      <Tabs.Screen 
        name="Feed" 
        component={FeedRoutes} 
        options={{
          tabBarIcon: ({ focused }) => <Feather name="home" size={28} color={focused ? '#739E82' : '#d4d4d4'} />,
          tabBarLabel: () => (
            <Text style={{
              fontSize: 16,
              fontFamily: 'Poppins_300Light',
              color: '#131813',
            }}>Posts</Text>
          ),
        }}
      />
      <Tabs.Screen 
        name="Recipes" 
        component={RecipeRoutes} 
        options={{
          tabBarIcon: ({ focused }) => <Feather name="book" size={28} color={focused ? '#739E82' : '#d4d4d4'} />,
          tabBarLabel: () => (
            <Text style={{
              fontSize: 16,
              fontFamily: 'Poppins_300Light',
              color: '#131813',
            }}>Dieta</Text>
          ),
        }}
      />
      
      <Tabs.Screen 
        name="Profile"
        component={ProfileRoutes} 
        options={{
          tabBarIcon: ({ focused }) => <Feather name="user" size={28} color={focused ? '#739E82' : '#d4d4d4'} />,
          tabBarLabel: () => (
            <Text style={{
              fontSize: 16,
              fontFamily: 'Poppins_300Light',
              color: '#131813',
            }}>Perfil</Text>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default AppRouter;
