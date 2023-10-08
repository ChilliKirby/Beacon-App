import { View, Text, Image, Pressable } from 'react-native';
import styles from '../../Styles.js';

const ProfileScene = ({ navigation }) => {


    return (
        <View style={styles.mainContainer}>

            <View style={styles.userPhotoContainer}>

                <Image style={styles.largeProfileImage} source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }} />
                <Pressable
                    onPress={() => navigation.navigate('Edit Image')}
                >
                    <Text style={styles.actionTextButtonCenter}>
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

                <View style={styles.actionButtonContainerOne}>
                    <Pressable
                        onPress={() => navigation.navigate('Edit Name')}
                    >
                        <Text style={styles.actionTextButtonCenter}>
                            Edit
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default ProfileScene;