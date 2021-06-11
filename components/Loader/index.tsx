import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import styles from './style';

const Loader = () => {
    const colorScheme = useColorScheme();
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={Colors[colorScheme].LoaderBackground} />
        </View>
    )
}
export default Loader;