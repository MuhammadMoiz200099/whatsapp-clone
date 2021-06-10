import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import styles from './style';
import { Calls } from '../../types';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import moment from 'moment';
import useColorScheme from '../../hooks/useColorScheme';


export type CallListItemProps = {
    calls: Calls
}

const CallListItem = (props: CallListItemProps) => {

    const colorSchema = useColorScheme();
    const { calls } = props;

    const openCallInfo = () => {
        //TODO: Create thr info screen for the respected call
    }

    return (
        <TouchableWithoutFeedback onPress={openCallInfo}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{ uri: calls.imageUri as string }} style={styles.avatar} />
                    <View style={styles.midContainer}>
                        <Text style={{ ...styles.username, color: Colors[colorSchema].screenMainText }}>{calls.name}</Text>
                        <View style={styles.midDateContainer}>
                            {calls.incomming && (<MaterialIcons name="call-received" size={18} color={calls.missed ? 'red' : Colors.light.bottomButtonIcon} />)}
                            {calls.outgoing && (<MaterialIcons name="call-made" size={18} color={Colors.light.bottomButtonIcon} />)}
                            <Text style={styles.status}>{moment(calls.createdAt as string).format('lll')}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity>
                    <MaterialIcons name="call" size={28} color={Colors.light.screenFloationIconColor} />
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    )

}

export default CallListItem;