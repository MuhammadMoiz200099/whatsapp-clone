import moment from 'moment';
import React from 'react';
import { Text, View } from 'react-native';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { Message } from '../../types';
import styles from './style';

export type ChatMessageProps = {
    message: Message;
    myId: String;
}

const ChatMessage = (props: ChatMessageProps) => {

    const colorScheme = useColorScheme();
    const { message, myId } = props;

    const isMyMessage = () => {
        return message.user?.id === myId;
    }

    return (
        <View style={styles.container}>
            <View style={[
                styles.messageBox, 
                { 
                    backgroundColor: isMyMessage() ? Colors[colorScheme].myChatMessageBoxColor : Colors[colorScheme].othersChatMessageBoxColor,
                    marginLeft: isMyMessage() ? 70 : 0, 
                    marginRight: isMyMessage() ? 0 : 70, 
                }
            ]}>
                {!isMyMessage() && (<Text style={styles.name}>{message.user?.name}</Text>)}
                <Text style={{ ...styles.message, color: isMyMessage() ? Colors[colorScheme].myChatMessageTextColor : Colors[colorScheme].othersChatMessageTextColor}}>{message.content}</Text>
                <Text style={{ ...styles.time, color: Colors[colorScheme].chatMessageTimeStampColor }}>{moment(message.createdAt as string).fromNow()}</Text>
            </View>
        </View>
    )

}

export default ChatMessage;