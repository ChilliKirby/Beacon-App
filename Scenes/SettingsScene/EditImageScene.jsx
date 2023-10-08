import { useState, useEffect } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from '../../Styles';

import * as ImagePicker from 'expo-image-picker';

const EditImageScene = () => {

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
        });

        //console.log(result);

        if(!result.canceled){
            setImage(result.assets[0].uri);
        }
    };

    useEffect( () => {
        pickImage();
    },[]);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.userPhotoContainer}>

                <Image style={styles.largeProfileImage} source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }} />
                <Pressable
                    // onPress={onPressCancel}
                >
                    <Text style={styles.actionTextButtonLeft}
                    >
                        Cancel
                    </Text>
                </Pressable>

                <Pressable
                    // onPress={patchNickName}
                >
                    <Text style={styles.actionTextButtonRight}
                    >
                        Save
                    </Text>
                </Pressable>

            </View>
            <Text style={styles.largeMainText}>
                Select Image
            </Text>
        </View>
    )
};

export default EditImageScene;