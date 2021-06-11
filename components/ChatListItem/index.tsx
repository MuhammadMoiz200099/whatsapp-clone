import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { ChatRoom } from '../../types';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';

import { Auth } from 'aws-amplify';

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {

    const colorSchema = useColorScheme();
    const navigation  = useNavigation();
    const [otherUser, setOtherUser] = useState<any>(null);

    const { chatRoom }: any = props;

    useEffect(() => {
        const getOtherUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            if(chatRoom?.chatRoomUsers.items[0].user.id === userInfo.attributes.sub) {
                setOtherUser(chatRoom?.chatRoomUsers.items[1].user);
            } else {
                setOtherUser(chatRoom?.chatRoomUsers.items[0].user);
            }
        }
        getOtherUser();
    }, [])

    const openChat = () => {
        navigation.navigate('ChatRoom', { id: chatRoom.id, name: otherUser.name });
    }

    if(!otherUser) {
        return null;
    }

    return (
        <TouchableWithoutFeedback onPress={openChat}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{ uri: otherUser.imageUri as string }} style={styles.avatar} />
                    <View style={styles.midContainer}>
                        <Text style={{ ...styles.username, color: Colors[colorSchema].screenMainText }}>{otherUser.name}</Text>
                        <Text style={styles.lastMessage}>{chatRoom?.lastMessage ? `${chatRoom.lastMessage.user.name}: ${chatRoom.lastMessage.content}` : ''}</Text>
                    </View>
                </View>
                <Text style={{ ...styles.timeStamp, color: Colors[colorSchema].chatScreenTimeStamp }}>{chatRoom?.lastMessage && moment(chatRoom.lastMessage.createdAt as string).format("DD/MM/YYYY")}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default ChatListItem;