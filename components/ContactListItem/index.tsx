import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { User } from '../../types';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

export type ContactListItemProps = {
    user: User;
}

const ContactListItem = (props: ContactListItemProps) => {

    const colorSchema = useColorScheme();
    const navigation  = useNavigation();

    const { user } = props;


    const openChat = () => {
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