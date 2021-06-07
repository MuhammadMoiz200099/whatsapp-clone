import moment from 'moment';
import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { ChatRoom } from '../../types';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {

    const navigation  = useNavigation();

    const { chatRoom } = props;
    const user =  chatRoom.users[1];

    const openChat = () => {
        navigation.navigate('ChatRoom', { id: chatRoom.id, name: user.name });
    }

    return (
        <TouchableWithoutFeedback onPress={openChat}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{ uri: user.imageUri as string }} style={styles.avatar} />
                    <View style={styles.midContainer}>
                        <Text style={styles.username}>{user.name}</Text>
                        <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                    </View>
                </View>
                <Text style={styles.timeStamp}>{moment(chatRoom.lastMessage.createdAt as string).format("DD/MM/YYYY")}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default ChatListItem;