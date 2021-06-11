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
import { onCreateMessage } from '../src/graphql/subscriptions';
import { LogBox } from 'react-native';
import Loader from '../components/Loader';

LogBox.ignoreLogs(['Setting a timer']);

const ChatRoomScreen = () => {

    const colorScheme = useColorScheme();
    const route: any = useRoute();

    const [messages, setMessages] = useState<any[]>([]);
    const [myId, setMyId] = useState<any>(null);
    
    const [isViewLoading, setIsViewLoading] = useState<boolean>(true);

    const fetchMessages = async () => {
        if(!isViewLoading) {
            setIsViewLoading(true);
        }
        const messageData: any = await API.graphql(
            graphqlOperation(
                messageByChatRoom, {
                    chatRoomID: route.params?.id,
                    sortDirection: "DESC"
                }
            )
        );
        setMessages(messageData.data.messageByChatRoom.items);
        setIsViewLoading(false);
    }

    const messageSend = () => { setIsViewLoading(true); }

    useEffect(() => {
        fetchMessages();
    }, [])

    useEffect(() => {
        const getMyID = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            setMyId(userInfo.attributes.sub);
        }
        getMyID();
    }, [])

    useEffect(() => {
        const subscription = (API as any).graphql(
            graphqlOperation(onCreateMessage)
        ).subscribe({
            next: (data: any) => {
                const newMessage = data.value.data.onCreateMessage;
                if(newMessage.chatRoomID !== route.params.id) {
                    return;
                }
                fetchMessages();
            }
        })
        return () => subscription.unsubscribe();
    }, [])

    return (
        <ImageBackground style={{ width: '100%', height: '100%' }} source={colorScheme === 'dark' ? BGBlack : BG}>
            { !isViewLoading ?
                (<FlatList 
                    data={messages}
                    renderItem={({ item }) => <ChatMessage myId={myId} message={item} />}
                    inverted
                />) : (
                    <Loader />
                )
            }
            <InputBox messageSend={messageSend} chatRoomID={route.params?.id} />
        </ImageBackground>
    );
}

export default ChatRoomScreen;