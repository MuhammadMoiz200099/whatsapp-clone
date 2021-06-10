import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './style'

const CallsFloatingButton = () => {

    const gotoNewCallScreen = () => {
        //TODO: Create a new screen to list all the avaliable contact for communication 
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={gotoNewCallScreen}>
                <MaterialIcons
                    name="add-call"
                    size={30}
                    color="white"
                />
            </TouchableOpacity>
        </View>
    )
}

export default CallsFloatingButton;