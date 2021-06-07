import moment from 'moment';
import React from 'react';
import { Text, View } from 'react-native';
import { Message } from '../../types';
import styles from './style';

export type ChatMessageProps = {
    message: Message
}

const ChatMessage = (props: ChatMessageProps) => {

    const { message } = props;

    const isMyMessage = () => {
        return message.user?.id === 'u1';
    }

    return (
        <View style={styles.container}>
            <View style={[
                styles.messageBox, 
                { 
                    backgroundColor: isMyMessage() ? '#DCF8C5' : '#e5e5e5',
                    marginLeft: isMyMessage() ? 70 : 0, 
                    marginRight: isMyMessage() ? 0 : 70, 
                }
            ]}>
                {!isMyMessage() && (<Text style={styles.name}>{message.user?.name}</Text>)}
                <Text style={styles.message}>{message.content}</Text>
                <Text style={styles.time}>{moment(message.createdAt as string).fromNow()}</Text>
            </View>
        </View>
    )

}

export default ChatMessage;