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

    //this field is used to update user pic in case of updates to aws s3
    const userPictureFileWTimestamp = `${userPictureFile}?t=${timestamp}`;

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
            <View style={styles.friendListContainer}>
                <Image
                    style={styles.friendListProfileImage}
                    source={{ uri: userPictureFileWTimestamp }}>
                </Image>
            </View>
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
                                source={{ uri: userPictureFileWTimestamp }}>
                            </Image>
                        </View>
                    </Marker>
                }
            </MapView>
        </View>
    );
}

export default HomeScene;