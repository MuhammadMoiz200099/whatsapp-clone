import { FontAwesome5, MaterialCommunityIcons, Entypo, Fontisto, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';  
import styles from './style';

const InputBox = () => {

    const [message, setMessage] = useState('');

    const sendVoiceMessage = () => {
        console.warn('Voice message');
    }

    const sendTextMessage = () => {
        console.warn('Text message');
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
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color="grey" />
                <TextInput 
                    placeholder="Type a Message" 
                    style={styles.textInput} 
                    multiline 
                    value={message}
                    onChangeText={setMessage}
                />
                <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
                {!message && (<Fontisto name="camera" size={24} color="grey" style={styles.icon} />)}
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