/**
 * Learn more about createMaterialTopTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatsScreen from '../screens/ChatsScreen';
import { MainTabParamList } from '../types';

import { Fontisto } from '@expo/vector-icons';
import NotFoundScreen from '../screens/NotFoundScreen';
import CameraScreen from '../screens/CameraScreen';
import StatusScreen from '../screens/StatusScreen';
import CallsScreen from '../screens/CallsScreen';

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{ 
        activeTintColor: Colors[colorScheme].headerActiveText,
        inactiveTintColor: Colors[colorScheme].headerinActiveText,
        style: {
          backgroundColor: Colors[colorScheme].headerColor,
        },
        indicatorStyle: {
          backgroundColor: Colors[colorScheme].headerIndicators,
          height: 4
        },
        labelStyle: {
          fontWeight: 'bold'
        },
        showIcon: true,
      }}>
      <MainTab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: ({ color }) => <Fontisto name="camera" color={color} size={18} />,
          tabBarLabel: () => null,
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={ChatsScreen}
      />
      <MainTab.Screen
        name="Status"
        component={StatusScreen}
      />
      <MainTab.Screen
        name="Calls"
        component={CallsScreen}
      />
    </MainTab.Navigator>
  );
}
