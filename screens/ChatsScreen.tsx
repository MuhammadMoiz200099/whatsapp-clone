import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import chatRooms from '../data/ChatRooms';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { getUser } from '../graphql/queries';
import { onUpdateChatRoom } from './../src/graphql/subscriptions';

import ChatListItem from '../components/ChatListItem';
import NewMessageButton from '../components/NewMessageButton';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { ChatRoom } from '../types';
import { LogBox } from 'react-native';
import Loader from '../components/Loader';

LogBox.ignoreLogs(['Setting a timer']);

export default function ChatsScreen() {
  
  const colorScheme = useColorScheme();
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);
  const [isViewLoading, setIsViewLoading] = useState<boolean>(true);

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
      setIsViewLoading(false);
    }
    catch (e) {
      console.log(e);
      setIsViewLoading(false);
    }
  };

  useEffect(() => {
    fetchChatRooms();
  }, [])

  useEffect(() => {
    const subscription = (API as any).graphql(
      graphqlOperation(onUpdateChatRoom)
    ).subscribe({
      next: (res: any) => {
        fetchChatRooms(); 
      }
    });
    return () => subscription.unsubscribe();
  }, [])

  return (
    <View style={{ ...styles.container, backgroundColor: Colors[colorScheme].AppBackground }}>
      {!isViewLoading ? (
        <>
          <FlatList 
          style={{ width: '100%' }}
          data={chatRooms} 
          renderItem={({ item }: any) => <ChatListItem chatRoom={item.chatRoom} />}
          keyExtractor={(item: any) => item.id}
          />
          <NewMessageButton />
        </>
      ) : (
        <Loader />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});
