import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import styles from '../../Styles.js';

const HomeScene = () => {

    const nickName = useSelector((state) => state.user.nickName);
    console.log(nickName);

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainText}>{nickName}</Text>
            <Text style={styles.mainText}>jkhjhk</Text>
            <Text style={styles.mainText}>jkhjhk</Text>
            <Text style={styles.mainText}>ghjg</Text>
            <MapView style={styles.mapContainer} provider={PROVIDER_GOOGLE} />

        </View>
    );
}

const xstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScene;