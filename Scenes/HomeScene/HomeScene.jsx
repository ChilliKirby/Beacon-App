import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

import styles from '../../Styles.js';

const HomeScene = () => {

    const nickName = useSelector((state) => state.user.nickName);

    const [location, setLocation] = useState({
        latitude: 140.6717733,
        longitude: -211.9493132,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            };

            let loc = await Location.getCurrentPositionAsync({});

            setLocation({
                ...location,
                latitude: loc.coords.latitude,
                longitude: loc.coords.longitude
            });
        })();
    }, []);

    let text = 'waiting...';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {

    }


    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainText}>{nickName}</Text>
            <Text style={styles.mainText}> {text} </Text>
            <MapView
                style={styles.mapContainer}
                provider={PROVIDER_GOOGLE}
                region={location}
            >
                <Marker
                    coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                    image={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                />
            </MapView>

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