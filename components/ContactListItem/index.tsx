import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { User } from '../../types';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import { createChatRoomUser, createChatRoom } from '../../src/graphql/mutations';

export type ContactListItemProps = {
    user: User;
}

const ContactListItem = (props: ContactListItemProps) => {

    const colorSchema = useColorScheme();
    const navigation  = useNavigation();

    const { user } = props;


    const openChat = async () => {
        try {
            // creating a new chat room
            const newChatRoomData: any = await API.graphql(graphqlOperation(
                createChatRoom, { input: {
                    lastMessageID: "zze7698b-3744-4c2b-9699-0084c593781a"
                } }
            ));

            if(!newChatRoomData.data) {
                console.log("Failed to create a chat room");
                return;
            }

            const newChatRoom = newChatRoomData.data.createChatRoom;
            // adding selected user to chat room
            await API.graphql(graphqlOperation(
                createChatRoomUser, {
                    input: {
                        userID: user.id,
                        chatRoomID: newChatRoom.id   
                    }
                }
            ));
            // adding current user to chatroom
            const userInfo = await Auth.currentAuthenticatedUser();
            await API.graphql(graphqlOperation(
                createChatRoomUser, {
                    input: {
                        userID: userInfo.attributes.sub,
                        chatRoomID: newChatRoom.id
                    }
                }
            ));

            navigation.navigate('ChatRoom', {
                id: newChatRoom.id,
                name: 'Hassan'
            });

        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={openChat}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{ uri: user.imageUri as string }} style={styles.avatar} />
                    <View style={styles.midContainer}>
                        <Text style={{ ...styles.username, color: Colors[colorSchema].screenMainText }}>{user.name}</Text>
                        <Text style={styles.status}>{user.status}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default ContactListItem;