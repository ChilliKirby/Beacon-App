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
        
        margin: 10,
        width: '80%',
        height: '60%',
        borderRadius: 20,
        alignContent: 'center',
    },
    textContainer: {
        flex: 1,
        width: '60%',
        margin: 10,
        //backgroundColor: '#ffdd00',
        borderColor: GOLDENYELLOW,
        borderWidth: 3,
        borderRadius: 30,
        alignContent: 'center',
        justifyContent: 'center'
    },
    editTextContainer: {
        height: '40%',
        width: '60%',
        margin: 10,
        borderColor: GOLDENYELLOW,
        borderWidth: 3,
        borderRadius: 30,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    actionButtonContainerOne: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
        borderColor: GOLDENYELLOW,
        borderWidth: 3,
        borderRadius: 30,
    },
    actionButtonContainerTwo: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 20,
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
    actionTextButtonRight: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#72bcd4',
        alignSelf: 'flex-end',
    },
    actionTextButtonLeft: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#72bcd4',
        alignSelf: 'flex-start',
    },
    actionTextButtonCenter: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#72bcd4',
        alignSelf: 'center',
    },
    editText: {
        fontWeight: 'bold',
        fontSize: 22,
        
        borderBottomColor: '#ffffff',
        borderBottomWidth: 3,
        color: '#ffffff',
    },

    /*Images*/
    largeProfileImage: {
        height: '100%',
        width: '100%',
    },

    mapProfileImage: {
        height: 50,
        width: 50
    }
})