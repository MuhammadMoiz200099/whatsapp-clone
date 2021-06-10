import * as React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import calls from '../data/Calls';

import CallListItem from '../components/CallListItem';
import CallsFloatingButton from '../components/CallsFloatingButton';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';

export default function CallsScreen() {

  const colorScheme = useColorScheme();
  
  return (
    <View style={{ ...styles.container, backgroundColor: Colors[colorScheme].AppBackground }}>
      <FlatList 
        style={{ width: '100%' }}
        data={calls} 
        renderItem={({ item }) => <CallListItem calls={item} />}
        keyExtractor={(item) => item.id}
      />
      <CallsFloatingButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});