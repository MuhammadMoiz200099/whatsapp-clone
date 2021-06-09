import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
    },
    leftContainer: {
        flexDirection: 'row',
    },
    imageContainer: {
        position: 'relative'
    },
    iconContainer: {
        position: 'absolute',
        backgroundColor: Colors.light.tint,
        padding: 5,
        borderRadius: 50,
        top: 40,
        left: 40
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
    status: {
        fontSize: 16,
        color: 'grey',
    }
});

export default styles;