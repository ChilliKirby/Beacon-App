import { View, TextInput } from 'react-native';
import { useState, useEffect } from 'react';

import styles from '../../Styles.js';
import { useSelector } from 'react-redux';

const EditNameScene = ({ navigation }) => {

    const nickName = useSelector((state) => state.nickName);
    const [text, onChangeText] = useState(nickName);

    useEffect(() => {
        if(text === ""){
            
        }
    })
    
    return (
        <View style={styles.mainContainer}>
            <View style={styles.editTextContainer}>
                <TextInput
                    editable
                    numberOfLines={1}
                    maxLength={10}
                    style={styles.editText}
                    onChangeText={onChangeText}
                    value={text}
                    
                ></TextInput>
            </View>
         </View>
    )
}

export default EditNameScene;