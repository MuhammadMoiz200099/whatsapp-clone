import moment from 'moment';
import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { ChatRoom } from '../../types';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import useColorScheme from '../../hooks/useColorScheme';
import { color } from 'react-native-reanimated';
import Colors from '../../constants/Colors';

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {


    const colorSchema = useColorScheme();
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
                        <Text style={{ ...styles.username, color: Colors[colorSchema].screenMainText }}>{user.name}</Text>
                        <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                    </View>
                </View>
                <Text style={{ ...styles.timeStamp, color: Colors[colorSchema].chatScreenTimeStamp }}>{moment(chatRoom.lastMessage.createdAt as string).format("DD/MM/YYYY")}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default ChatListItem;