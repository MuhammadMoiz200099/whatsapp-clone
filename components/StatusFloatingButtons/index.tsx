import { Fontisto, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import Colors from '../../constants/Colors';

import styles from './styles';

const StatusFloatingButtons = () => {
    return (
        <View style={styles.container}>
            <View style={styles.editIconUpperLayer}>
                <MaterialIcons name="edit" color={Colors.light.tint} size={22} />
            </View>
            <View style={styles.cameraIconUpperLayer}>
                <Fontisto name="camera" color="white" size={22} />
            </View>
        </View>
    )
}

export default StatusFloatingButtons;