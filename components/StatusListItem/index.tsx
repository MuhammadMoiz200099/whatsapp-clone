import { FontAwesome } from '@expo/vector-icons';
import moment from 'moment';
import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { Status } from '../../types';
import styles from './styles';

export type StatusListItemProps = {
    user: Status;
    me?: boolean;
}

const StatusListItem = (props: StatusListItemProps) => {

    const colorSchema = useColorScheme();
    const { user, me } = props;

    const openStatus = () => {

    }

    return (
        <TouchableWithoutFeedback onPress={openStatus}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: user.imageUri as string }} style={styles.avatar} />
                        {me && (
                            <View style={styles.iconContainer}>
                                <FontAwesome name="plus" color="white" size={14} />
                            </View>
                        )}
                    </View>

                    <View style={styles.midContainer}>
                        <Text style={{ ...styles.username, color: Colors[colorSchema].screenMainText }}>{user.name}</Text>
                        {me ? (

                            <Text style={styles.status}>{user.description}</Text>
                        ) : (
                            <Text style={styles.status}>{moment(user.createdAt as string).calendar()}</Text>

                        )
                        }
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StatusListItem;