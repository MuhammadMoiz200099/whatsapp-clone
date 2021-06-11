import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import chatRooms from '../data/ChatRooms';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { getUser } from '../graphql/queries';

import ChatListItem from '../components/ChatListItem';
import NewMessageButton from '../components/NewMessageButton';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { ChatRoom } from '../types';


export default function ChatsScreen() {
  
  const colorScheme = useColorScheme();
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);

  useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        const userInfo = await Auth.currentAuthenticatedUser();

        const userData: any = await API.graphql(graphqlOperation(
          getUser,
          {
            id: userInfo.attributes.sub
          }
        ));
        setChatRooms(userData.data.getUser.chatRoomUser.items);
        console.log(userData);
      }
      catch (e) {
        console.log(e);
      }
    };
    fetchChatRooms();
  }, [])

  return (
    <View style={{ ...styles.container, backgroundColor: Colors[colorScheme].AppBackground }}>
      <FlatList 
        style={{ width: '100%' }}
        data={chatRooms} 
        renderItem={({ item }: any) => <ChatListItem chatRoom={item.chatRoom} />}
        keyExtractor={(item: any) => item.id}
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
