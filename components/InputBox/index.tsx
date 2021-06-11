import { FontAwesome5, MaterialCommunityIcons, Entypo, Fontisto, MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';  
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import styles from './style';

import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createMessage } from './../../src/graphql/mutations';

export type inputBoxProps = {
    chatRoomID: any;
}

const InputBox = (props: inputBoxProps) => {

    const { chatRoomID } = props; 

    const colorScheme = useColorScheme();
    const [message, setMessage] = useState('');
    const [myUserId, setMyUserId] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            setMyUserId(userInfo.attributes.sub);
        }
        fetchUser();
    }, [])

    const sendVoiceMessage = () => {
        console.warn('Voice message');
    }

    const sendTextMessage = async () => {
        try {
            await API.graphql(
                graphqlOperation(
                    createMessage, {
                        input: {
                            content: message,
                            userID: myUserId,
                            chatRoomID
                        }
                    }
                )
            )
        }
        catch(e) {
            console.log(e);
        }
        setMessage('');
    }

    const actionPerformed = () => {
        if(!message) {
            sendVoiceMessage();
        } else {
            sendTextMessage()
        }
    }

    return(
        <View style={styles.container}>
            <View style={{ ...styles.mainContainer, backgroundColor: Colors[colorScheme].inputBackground }}>
                <FontAwesome5 name="laugh" size={24} color={Colors[colorScheme].inputIconColor} />
                <TextInput 
                    placeholder="Type a Message" 
                    style={{ ...styles.textInput, color: Colors[colorScheme].inputText }} 
                    multiline 
                    value={message}
                    onChangeText={setMessage}
                    placeholderTextColor={Colors[colorScheme].inputPlaceHolderColor}
                />
                <Entypo name="attachment" size={24} color={Colors[colorScheme].inputIconColor} style={styles.icon} />
                {!message && (<Fontisto name="camera" size={24} color={Colors[colorScheme].inputIconColor} style={styles.icon} />)}
            </View>
            <TouchableOpacity onPress={actionPerformed}>
                <View style={styles.buttonContainer}>
                    {
                        !message ? (
                            <MaterialCommunityIcons name='microphone' color='white' size={28} />
                        ) : (
                            <MaterialIcons name='send' color='white' size={28} />
                        )
                    }
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default InputBox;