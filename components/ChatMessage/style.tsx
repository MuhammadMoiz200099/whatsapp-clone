import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    messageBox: {
        borderRadius: 5,
        padding: 10
    },
    name: {
        color: Colors.light.tint,
        fontWeight: "bold",
        marginBottom: 5,
    },
    message: {
        fontSize: 16,
    },
    time: {
        alignSelf: 'flex-end',
        color: '#c5c5c5'
    }
});

export default styles;