import React from 'react';
import { Text, FlatList } from 'react-native';
import ChatMessage from '../components/ChatMessage'

import { useRoute } from '@react-navigation/native';
import chatRoomData from '../data/Chats';

const ChatRoomScreen = () => {

    const route = useRoute();

    return (
        <FlatList 
            data={chatRoomData.messages}
            renderItem={({ item }) => <ChatMessage message={item} />}
            inverted
        />
    );
}

export default ChatRoomScreen;