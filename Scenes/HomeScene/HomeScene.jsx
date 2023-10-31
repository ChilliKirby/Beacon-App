import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from "react-native";
import { useSelector } from "react-redux";

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

import styles from '../../Styles.js';

const HomeScene = () => {

    const nickName = useSelector((state) => state.user.nickName);
    const userPictureFile = useSelector((state) => state.user.pictureFile);
    //const [timestamp, setTimeStamp] = useState(null);
    const timestamp = new Date().getTime();
    const u2 = `${userPictureFile}?t=${timestamp}`;

    const [location, setLocation] = useState({
        latitude: 140.6717733,
        longitude: -211.9493132,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [errorMsg, setErrorMsg] = useState(null);

    

    useEffect(() => {
        //setTimeStamp(new Date().getTime());
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
    }, [userPictureFile]);

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainText}>{u2}</Text>
            <Image 
            key={useSelector((state) => state.user.pictureFile)}
            source= {{uri: u2 }} height={50} width={50}></Image>
            <MapView
                style={styles.mapContainer}
                provider={PROVIDER_GOOGLE}
                region={location}
            >

                {userPictureFile == "" ?
                    <Marker
                        coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                        image={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                    />
                    :
                    <Marker
                        coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                    >
                        <View>
                            <Image
                                style={styles.mapProfileImage}
                                source={{ uri:  u2 }}>
                            </Image>
                        </View>
                    </Marker>
                }
            </MapView>
        </View>
    );
}

export default HomeScene;