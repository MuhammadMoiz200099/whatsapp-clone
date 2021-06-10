import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    leftContainer: {
        flexDirection: 'row',
    },
    rightContainer: {
        marginRight: 20
    },
    iconContainer: {
        width: 60,
        height: 60,
        backgroundColor: Colors.light.screenFloationIconColor,        
        borderRadius: 50,        
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconContainerNoBG: {
        width: 60,
        height: 60,        
        borderRadius: 50,        
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center'
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
    text: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    status: {
        fontSize: 16,
        color: 'grey',
    }
});

export default styles;