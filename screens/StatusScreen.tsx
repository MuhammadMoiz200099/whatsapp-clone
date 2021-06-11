import * as React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import StatusListItem from '../components/StatusListItem';
import StatusFloatingButtons from '../components/StatusFloatingButtons';
import status from '../data/Status';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';


const StatusScreen = () => {

    const colorScheme = useColorScheme();
    

    return (
        <>
            <ScrollView contentContainerStyle={{ ...styles.container, backgroundColor: Colors[colorScheme].AppBackground, }}>
                <StatusListItem user={status.currentUser} me />
                <View style={{ ...styles.viewBreak, backgroundColor: Colors[colorScheme].inScreenBackgroundColor }}>
                    <Text style={{ ...styles.viewBreakText, color: Colors[colorScheme].inScreenTextColor }}>Recent updates</Text>
                </View>
                {status.recentUpdated.map((item, idx) => (
                    <StatusListItem key={idx} user={item} />
                ))}
                <View style={{ ...styles.viewBreak, backgroundColor: Colors[colorScheme].inScreenBackgroundColor }}>
                    <Text style={{ ...styles.viewBreakText, color: Colors[colorScheme].inScreenTextColor }}>Viewed updates</Text>
                </View>
                {status.viewedUpdated.map((item, idx) => (
                    <StatusListItem key={idx} user={item} />
                ))}
            </ScrollView>
            <StatusFloatingButtons />
        </>
    )
}

export default StatusScreen;

const styles = StyleSheet.create({
    container: {
        paddingBottom: 120
    },
    viewBreakText: {
        fontSize: 15,
        fontWeight: '700',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    viewBreak: {
        marginTop: 5,
        marginBottom: 5,
        borderColor: '#f3f3f3'
    }
});