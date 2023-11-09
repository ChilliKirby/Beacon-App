import { View, Text, Image, Pressable } from 'react-native';
import { useRoute } from '@react-navigation/native';

import styles from '../../Styles.js';
import { useSelector } from 'react-redux';


const ViewProfileScene = () => {
    
    const route = useRoute();
    const { nickName, pictureFile } = route.params;
    console.log(route.params);
    return(
        <View style={styles.mainContainer}>

        <View style={styles.userPhotoContainer}>

            <Image style={styles.largeProfileImage} source={{
                uri: pictureFile,
            }} />
           

        </View>

        <View style={styles.textContainer}>
            <Text
                style={styles.largeMainText}
                adjustsFontSizeToFit={true}
            >
                { nickName }
            </Text>

            
        </View>
    </View>
    )
}

export default ViewProfileScene;