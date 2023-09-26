import { StyleSheet, Dimensions } from "react-native";

const GOLDENYELLOW = '#ffdd00';

export default styles = StyleSheet.create({
    /*Containers*/
    mainContainer: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
      },
    mapContainer: {
        height: '85%',
        width: '100%',
    },
    settingsContainer: {
        flex: 1,
        backgroundColor: '#000000',
      },
    settingsCircleContainer: {
        flex: 1, 
        backgroundColor: '#000000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    settingsCircle: {
        //flex: 1,
        alignSelf: "auto",
        borderRadius: 50,
        backgroundColor: GOLDENYELLOW,
        height: '70%',
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    userPhotoContainer: {
        flex: 2,
        margin: 10,
        width: '80%',
        height: '40%',
        borderRadius: 20
    },
    textContainer: {
        flex: 1,
        width: '60%',
        margin: 10,
        backgroundColor: '#ffdd00',
        borderRadius: 30,
        alignContent: 'center',
        justifyContent: 'center'
    },
    editTextContainer: {
        height: '40%',
        width: '60%',
        margin: 10,
        backgroundColor: '#ffdd00',
        borderRadius: 30,
        justifyContent: 'center',
        alignContent: 'center',
    },

    /*Text*/
    mainText: {
        fontSize: 18,
        color: "#fff",
    },
    largeMainText: {
        fontSize: 35,
        color: "#fff",
        alignSelf: 'center',
        
    },
    circleText: {
        fontWeight: 'bold',
        fontSize: 22,
        color: "#000000"
    },
    editTextButton: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#72bcd4',
        alignSelf: 'center',
    },
    editText: {
        fontWeight: 'bold',
        fontSize: 22,
        alignSelf: 'center',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
    }
})