import { View, Text, TextInput, Pressable } from 'react-native';
import { useState, useEffect } from 'react';

import styles from '../../Styles.js';
import { useSelector, useDispatch } from 'react-redux';

import { setBeaconUserName } from '../../State/index.js';

const EditNameScene = ({ navigation }) => {

    const dispatch = useDispatch();
    const nickName = useSelector((state) => state.user.nickName);
    const id = useSelector((state) => state.user.id);
    const token = useSelector((state) => state.user.token);

    const [text, onChangeText] = useState(nickName);

    useEffect(() => {
        if (text === "") {

        }
    })

    const patchNickName = async () => {
        
        const response = await fetch(`http://192.168.86.123:3001/users/nickName/`,
        {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nickName: text,
                id: id,
            })
        });

        const data = await response.json();
        
        dispatch(setBeaconUserName({
            nickName: data
        }));
    }

    const onPressCancel = () => {
        onChangeText(nickName);
        navigation.navigate('Profile')
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.editTextContainer}>
                <Text style={styles.mainText}>Edit Name: </Text>
                <TextInput
                    editable
                    numberOfLines={1}
                    maxLength={25}
                    style={styles.editText}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder={nickName}
                    placeholderTextColor='#ffffff'
                />

                <View style={styles.actionButtonContainerTwo}>
                    <Pressable
                        onPress={onPressCancel}
                    >
                        <Text style={styles.actionTextButtonLeft}
                        >
                            Cancel
                        </Text>
                    </Pressable>

                    <Pressable
                        onPress={patchNickName}
                    >
                        <Text style={styles.actionTextButtonRight}
                        >
                            Save
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default EditNameScene;