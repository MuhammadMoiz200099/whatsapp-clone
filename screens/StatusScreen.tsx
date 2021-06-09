import * as React from 'react';
import { View, FlatList, StyleSheet, Text, ScrollView } from 'react-native';
import StatusListItem from '../components/StatusListItem/StatusListItem';
import status from '../data/Status';


const StatusScreen = () => {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusListItem user={status.currentUser} me />
            <Text style={styles.viewBreakText}>Recent updates</Text>
            {status.recentUpdated.map((item) => (
                <StatusListItem user={item} />
            ))}
            <Text style={styles.viewBreakText}>Viewed updates</Text>
            {status.viewedUpdated.map((item) => (
                <StatusListItem user={item} />
            ))}
        </ScrollView>
    )
}

export default StatusScreen;

const styles = StyleSheet.create({
    container: {
        paddingBottom: 40
    },
    viewBreakText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginVertical: 10,
        color: 'gray'
    }
});
