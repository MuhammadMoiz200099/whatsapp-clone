import * as React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import StatusListItem from '../components/StatusListItem';
import StatusFloatingButtons from '../components/StatusFloatingButtons';
import status from '../data/Status';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';


const StatusScreen = () => {

    const colorScheme = useColorScheme();

    const styles = StyleSheet.create({
        container: {
            backgroundColor: Colors[colorScheme].AppBackground,
            paddingBottom: 120
        },
        viewBreakText: {
            fontSize: 15,
            fontWeight: '700',
            marginHorizontal: 20,
            marginVertical: 10,
            color: Colors[colorScheme].inScreenTextColor
        },
        viewBreak: {
            backgroundColor: Colors[colorScheme].inScreenBackgroundColor,
            marginTop: 5,
            marginBottom: 5,
            borderColor: '#f3f3f3'
        }
    });
    

    return (
        <View>
            <ScrollView contentContainerStyle={styles.container}>
                <StatusListItem user={status.currentUser} me />
                <View style={styles.viewBreak}>
                    <Text style={styles.viewBreakText}>Recent updates</Text>
                </View>
                {status.recentUpdated.map((item, idx) => (
                    <StatusListItem key={idx} user={item} />
                ))}
                <View style={styles.viewBreak}>
                    <Text style={styles.viewBreakText}>Viewed updates</Text>
                </View>
                {status.viewedUpdated.map((item, idx) => (
                    <StatusListItem key={idx} user={item} />
                ))}
            </ScrollView>
            <StatusFloatingButtons />
        </View>
    )
}

export default StatusScreen;
