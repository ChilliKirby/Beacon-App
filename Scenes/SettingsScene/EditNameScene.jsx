import { View, Text, TextInput, Pressable } from 'react-native';
import { useState, useEffect } from 'react';

import styles from '../../Styles.js';
import { useSelector } from 'react-redux';

const EditNameScene = ({ navigation }) => {

    const nickName = useSelector((state) => state.user.nickName);
    const [text, onChangeText] = useState(nickName);

    console.log("in edit name" + nickName);

    useEffect(() => {
        if (text === "") {

        }
    })

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
                        onPress={onPressCancel}
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