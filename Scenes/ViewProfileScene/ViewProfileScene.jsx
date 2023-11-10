import { View, Text, Image, Pressable } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather.js';
import { useSelector, useDispatch } from 'react-redux';

import styles from '../../Styles.js';
import { setFriends } from '../../State/index.js';



const ViewProfileScene = () => {

    const route = useRoute();
    const { nickName, pictureFile, friendId } = route.params;
    const token = useSelector((state) => state.user.token);
    const id = useSelector((state) => state.user.id);

    const dispatch = useDispatch();

    const handleAddRemoveFriend = async() => {
        console.log("handle add remove");

        try{
            const response = await fetch(`http://192.168.86.123:3001/users/${id}/${friendId}/addRemoveFriend`,
            {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
            );

            const data = await response.json();

            dispatch(setFriends({ friends: data }));
            
        } catch(error){
            console.log(error);
        }
    }

    return (
        <View style={styles.mainContainer}>

            <View style={styles.userPhotoContainer}>

                <Image style={styles.largeProfileImage} source={{
                    uri: pictureFile,
                }} />


            </View>

            <View style={styles.viewProfileInfoContainer}>
                <Text
                    style={styles.largeMainTextLeft}
                    adjustsFontSizeToFit={true}
                >
                    {nickName}
                </Text>

                <Pressable
                    onPress={
                        handleAddRemoveFriend
                    }
                >
                <Icon name="user-plus" size={30} color="#999" />
                </Pressable>

            </View>
        </View>
    )
}

export default ViewProfileScene;