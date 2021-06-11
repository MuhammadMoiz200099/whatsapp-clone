import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground } from 'react-native';
import ChatMessage from '../components/ChatMessage'

import BG from '../assets/images/BG.png';
import BGBlack from '../assets/images/BGBlack.png';
import InputBox from '../components/InputBox';
import useColorScheme from '../hooks/useColorScheme';
import { useRoute } from '@react-navigation/core';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import { messageByChatRoom } from '../src/graphql/queries';

const ChatRoomScreen = () => {

    const colorScheme = useColorScheme();
    const route: any = useRoute();

    const [messages, setMessages] = useState([]);
    const [myId, setMyId] = useState<any>(null);

    useEffect(() => {
        const fetchMessages = async () => {
            const messageData: any = await API.graphql(
                graphqlOperation(
                    messageByChatRoom, {
                        chatRoomID: route.params?.id,
                        sortDirection: "DESC"
                    }
                )
            );
            setMessages(messageData.data.messageByChatRoom.items);
        }
        fetchMessages();
    }, [])

    useEffect(() => {
        const getMyID = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            setMyId(userInfo.attributes.sub);
        }
        getMyID();
    }, [])

    return (
        <ImageBackground style={{ width: '100%', height: '100%' }} source={colorScheme === 'dark' ? BGBlack : BG}>
            <FlatList 
                data={messages}
                renderItem={({ item }) => <ChatMessage myId={myId} message={item} />}
                inverted
            />
            <InputBox chatRoomID={route.params?.id} />
        </ImageBackground>
    );
}

export default ChatRoomScreen;