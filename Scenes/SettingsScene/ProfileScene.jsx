import { View, Text, Image, Pressable } from 'react-native';
import styles from '../../Styles.js';

const ProfileScene = ({ navigation }) => {


    return (
        <View style={styles.mainContainer}>

            <View style={styles.userPhotoContainer}>

                <Image style={{ flex: 1, height: undefined, width: undefined }} source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }} />
                <Pressable
                    onPress={() => navigation.navigate('')}
                >
                    <Text style={styles.editTextButton}>
                        Edit
                    </Text>
                </Pressable>

            </View>

            <View style={styles.textContainer}>
                <Text 
                    style={styles.largeMainText}
                    adjustsFontSizeToFit={true}
                     >
                    Name
                </Text>
                <Pressable
                    onPress={() => navigation.navigate('Edit Name')}
                >
                    <Text style={styles.editTextButton}>
                        Edit
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default ProfileScene;