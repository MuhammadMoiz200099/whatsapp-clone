import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { User } from '../../types';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

export type ContactDefaultItemProps = {
    filterProp: String;
    iconName: any;
    background?: boolean;
    rightIcon?: boolean;
    text: String;
}

const ContactDefaultItem = (props: ContactDefaultItemProps) => {

    const colorSchema = useColorScheme();
    const navigation  = useNavigation();

    const { filterProp, iconName, background, rightIcon, text } = props;


    const openScreen = () => {
    }

    return (
        <TouchableWithoutFeedback onPress={openScreen}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    {background && (<View style={styles.iconContainer}><Ionicons name={iconName} size={28} color="white" /></View>)}
                    {!background && (<View style={styles.iconContainerNoBG}><Ionicons name={iconName} size={30} color="gray" /></View>)}
                    <View style={styles.midContainer}>
                        <Text style={{ ...styles.text, color: Colors[colorSchema].screenMainText }}>{text}</Text>
                    </View>
                </View>
                {rightIcon && (<View style={styles.rightContainer}>
                    <Ionicons name="qr-code-outline" size={24} color={Colors[colorSchema].contactScreenIconColor} />
                </View>)}
            </View>
        </TouchableWithoutFeedback>
    );
}

export default ContactDefaultItem;