import { useState, useEffect } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../Styles';

import { setBeaconUserImage } from '../../State';

import * as ImagePicker from 'expo-image-picker';

const EditImageScene = () => {

    const dispatch = useDispatch();
    const id = useSelector((state) => state.user.id);
    const userNickName = useSelector((state) => state.user.nickName);
    const token = useSelector((state) => state.user.token);
    const userImage = useSelector((state) => state.user.pictureFile);
    const [image, setImage] = useState(userImage);

    //info for formdata
    const [uri, setUri] = useState(null);
    const [type, setType] = useState(null);
    const [name, setName] = useState(null);

    //setImage(userImage);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [2, 2],
            quality: 1,

        });

        //console.log(result);

        if (!result.canceled) {

            setImage(result.assets[0].uri);
            setUri(result.assets[0].uri);


            const uriArray = result.assets[0].uri.split(".");
            const fileExtension = uriArray[uriArray.length - 1];

            setType(result.assets[0].type + "/" + fileExtension);
            //setName(result.assets[0].fileName);
        }
    };

    useEffect(() => {
        pickImage();
    }, []);

    const patchUserImage = async () => {

        const formData = new FormData();
        formData.append('file', {
            uri: uri,
            type: type,
            name: id + "_" + "profile" + "_" + "image" + ".jpg",
        });
        console.log("before fetch " );
        console.log(uri);
        console.log(type);

        try {
            const response = await fetch(`http://192.168.86.123:3001/users/${id}/userImage`,
                {
                    method: "PATCH",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",                       
                    },
                    body: formData                    
                }
            );
            console.log("bbbbb");
            const data = await response.json();
            console.log(data.url);
            
            //Extra dispatch used to refresh cache of old version
            //of image due to reuse of uri
            dispatch((setBeaconUserImage({
                pictureFile: ""
            })));
            dispatch((setBeaconUserImage({
                pictureFile: data.url
            })));

            
        } catch (error) {
            console.log(error + "in edit image scene");
        }
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.userPhotoContainer}>

                {image && <Image style={styles.largeProfileImage} source={{
                    uri: image,
                }} />}
                {/* <Text style={styles.mainText}> hi {image}</Text> */}
                <Pressable
                // onPress={onPressCancel}
                >
                    <Text style={styles.actionTextButtonLeft}
                    >
                        Cancel
                    </Text>
                </Pressable>

                <Pressable
                    onPress={patchUserImage}
                >
                    <Text style={styles.actionTextButtonRight}
                    >
                        Save
                    </Text>
                </Pressable>

            </View>
            {/* <Text style={styles.largeMainText}>
                Select Image
            </Text>

            <Text style={styles.largeMainText}>
                {uri}
            </Text>
            <Text style={styles.largeMainText}>
                {name}
            </Text>
            <Text style={styles.largeMainText}>
                {type}
            </Text> */}
        </View>
    )
};

export default EditImageScene;