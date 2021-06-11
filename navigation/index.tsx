/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { Octicons, MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import Colors from '../constants/Colors';
import { View } from 'react-native';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ContactsScreen from '../screens/ContactsScreen';
import CameraScreen from '../screens/CameraScreen';
import useColorScheme from '../hooks/useColorScheme';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {

  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator screenOptions={{ 
      headerStyle: {
        backgroundColor: Colors[colorScheme].headerColor,
        shadowOpacity: 0,
        elevation: 0
      },
      headerTintColor: Colors[colorScheme].headerText,
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <Stack.Screen name="Root" component={MainTabNavigator} options={{ 
        title: 'WhatsApp',
        headerRight: () => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 60, marginRight: 10,  }} >
            <Octicons name="search" size={22} color={Colors[colorScheme].headerText} />
            <MaterialCommunityIcons name="dots-vertical" size={22} color={Colors[colorScheme].headerText} />
          </View>
        )
       }} />
      <Stack.Screen 
        name="ChatRoom" 
        component={ChatRoomScreen} 
        options={({ route }) => ({ 
          title: (route.params as any).name,
           headerRight: () => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 120, marginRight: 10  }}>
              <FontAwesome5 name="video" size={22} color={'white'} />  
              <MaterialIcons name="call" size={22} color={'white'} />
              <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />
            </View>
          )
        })} 
      />   
      <Stack.Screen 
        name="Contacts" 
        component={ContactsScreen} 
        options={{
          headerRight: () => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 60, marginRight: 10  }} >
              <Octicons name="search" size={22} color="white" />
              <MaterialCommunityIcons name="dots-vertical" size={22} color="white" />
            </View>
          )
        }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
