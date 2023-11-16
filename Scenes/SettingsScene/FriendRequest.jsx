import { View, FlatList, Image, Text, Pressable } from "react-native";
import { useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/Feather.js';

import styles from "../../Styles";
import { useEffect } from "react";
import { useState } from "react";

const FriendRequest = () => {

    const [results, setResults] = useState();
    const userId = useSelector((state) => state.user.id);
    const token = useSelector((state) => state.user.token);

    const fetchFriendRequests = async () => {
        console.log("getting friends");
        try {
            const response = await fetch(`http://192.168.86.123:3001/users/${userId}/getFriendRequests`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                }
            );

            const data = await response.json();
            console.log(data);
            setResults(data);

        } catch (error) {
            console.log(error);
        }
    }

    const handleAddFriend = async (friendId) => {
        try{
            const response = await fetch(`http://192.168.86.123:3001/users/${userId}/${friendId}/acceptFriend`,
            {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            const data = await response.json();
            console.log(data);
            setResults(data);
        } catch(error){
            console.log(error);
        }
        console.log("aff ");
    }


    useEffect(() => {
        fetchFriendRequests();
    }, []);

    const Item = ({ nickName, pictureFile, friendId }) => (
       
        
        <View style={styles.flatListItemContainer}>
            <Image style={styles.flatListItemImage} source={{ uri: pictureFile }} />
            <Text style={styles.flatListItemText}>{nickName}</Text>
                
            <View style={styles.flatListItemButton}>
            <Pressable
                onPress={() => handleAddFriend(friendId)}
                
            >
                <Icon name="user-plus" size={30} color="#999" />
            </Pressable>
            </View>
        </View>

    );

    return (
        <View style={styles.mainContainer}>
            {results &&

                

                    
                    <FlatList
                        data={results}
                        renderItem={({ item }) => <Item nickName={item.nickName} pictureFile={item.pictureFile} friendId={item.id} />}
                        // renderItem={(item) => <Item nickName={item.nickName} image={item.pictureFile} friendId={item.id} />}
                        keyExtractor={item => item.id}
                    >
                    </FlatList>

                
            }
            {/* if(results){
            <View styles={styles.mainContainer}>
                
                <Text style={styles.mainText}>{results[0].nickName}</Text>
                <FlatList
                    data={results}
                    renderItem={(item) => <Item nickName={item.nickName} image={item.pictureFile} friendId={item.id} />}
                    keyExtractor={item => item.id}
                    >
                </FlatList>

            </View>
} */}
        </View>
    )
}

export default FriendRequest;