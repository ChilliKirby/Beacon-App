import { View, Text, Image, Pressable } from 'react-native';
import styles from '../../Styles.js';

const ProfileScene = () => {


    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainText}>profile</Text>

            <View>
                <Image style={{ height: 100, width: 100 }} source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }} />
                <Pressable>
                    <Text style={styles.editText}>
                        Edit
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default ProfileScene;