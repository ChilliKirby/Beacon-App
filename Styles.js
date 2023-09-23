import { StyleSheet } from "react-native";

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


    /*Text*/
    mainText: {
        fontSize: 18,
        color: "#fff",
    },
    circleText: {
        fontWeight: 'bold',
        fontSize: 22,
        color: "#000000"
    }

})