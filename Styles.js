import { StyleSheet, Dimensions } from "react-native";

const GOLDENYELLOW = '#ffdd00';

export default styles = StyleSheet.create({
    /*Containers*////////////////////////////////////////
    mainContainer: {
        flex: 1,
        backgroundColor: '#000000',
        // alignItems: 'center',
        //justifyContent: 'center',
      },

    //Home Screen Containers
    mapContainer: {
        height: '85%',
        width: '100%',
    },
    friendListContainer: {
        height: '15%',
        width: '100%'
    },

    //Settings Container
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
        width: '40%',
        height: '40%',
        borderRadius: 20,
        alignContent: 'center',
    },

    //misc containers//////////////////////////////////////////////
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
    viewProfileInfoContainer: {
        //flex: 1,
        flexDirection: 'row',
        height: '20%',
        width: '80%',
        margin: 10,
        //backgroundColor: '#ffdd00',
        borderColor: GOLDENYELLOW,
        borderWidth: 3,
        borderRadius: 30,
        alignContent: 'space-around',
        alignItems:'center',
        justifyContent:'space-between',
        padding: 10,
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
    searchBarContainer: {
        height: '20%',
        width: '60%',
    },
    searchResultsFlatlistContainer: {
        height: '90%',
        width: '90%',
        backgroundColor: '#47e',
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
    flatListItemContainer: {
        backgroundColor: '#f9c2ff',
        // padding: 10,
        // marginVertical: 2,
        // marginHorizontal: 2,
        height: 100,
        width: '90%',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    flatListItemButton: {
        alignSelf:'center',
               
    },
   

    /*Text*////////////////////////////////////////////////////
    mainText: {
        fontSize: 18,
        color: "#fff",
    },
    largeMainText: {
        fontSize: 35,
        color: "#fff",
        alignSelf: 'center',
        
    },
    largeMainTextLeft: {
        fontSize: 35,
        color: "#fff",
        margin: 10,
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
    flatListItemText: {
        fontSize: 18,
        color: "#fff",
        alignSelf: 'center',
        margin: 3,
    },

    /*Images*//////////////////////////////////////////////
    largeProfileImage: {
        height: '100%',
        width: '100%',
    },
    mapProfileImage: {
        height: 50,
        width: 50
    },
    friendListProfileImage: {
        height: '100%',
        width: '15%'
    },
    flatListItemImage: {
        height: '95%',
        width: '20%',
        padding: 2
    },
   
})