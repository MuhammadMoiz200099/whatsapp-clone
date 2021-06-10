import React from 'react';
import { FlatList, ImageBackground } from 'react-native';
import ChatMessage from '../components/ChatMessage'

import { useRoute } from '@react-navigation/native';
import chatRoomData from '../data/Chats';

import BG from '../assets/images/BG.png';
import BGBlack from '../assets/images/BGBlack.png';
import InputBox from '../components/InputBox';
import useColorScheme from '../hooks/useColorScheme';

const ChatRoomScreen = () => {

    const route = useRoute();
    const colorScheme = useColorScheme();

    return (
        <ImageBackground style={{ width: '100%', height: '100%' }} source={colorScheme === 'dark' ? BGBlack : BG}>
            <FlatList 
                data={chatRoomData.messages}
                renderItem={({ item }) => <ChatMessage message={item} />}
                inverted
            />
            <InputBox />
        </ImageBackground>
    );
}

export default ChatRoomScreen;