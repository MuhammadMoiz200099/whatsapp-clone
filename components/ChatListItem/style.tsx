import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
        position: 'relative'
    },
    leftContainer: {
        flexDirection: 'row',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 15,
    },
    midContainer: {
        justifyContent: 'space-evenly',
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    lastMessage: {
        fontSize: 16,
        color: 'grey',
    },
    timeStamp: {
        position: 'absolute',
        right: 10,
        top: 16,
        fontSize: 14,
        color: 'grey',
    }
});

export default styles;