import { StyleSheet } from "react-native"
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flexDirection: 'column',
        alignItems: 'center',
        bottom: 20,
        right: 20
    },
    editIconUpperLayer: {
        backgroundColor: '#ecf4f7',
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    cameraIconUpperLayer: {
        backgroundColor: Colors.light.screenFloationIconColor,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    }
});

export default styles;