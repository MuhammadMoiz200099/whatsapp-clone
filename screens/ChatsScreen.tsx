import * as React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import chatRooms from '../data/ChatRooms';
import { ChatRoom } from '../types';

import ChatListItem from '../components/ChatListItem';
import NewMessageButton from '../components/NewMessageButton';

export default function ChatsScreen() {

  return (
    <View style={styles.container}>
      <FlatList 
        style={{ width: '100%' }}
        data={chatRooms} 
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
      <NewMessageButton />
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
