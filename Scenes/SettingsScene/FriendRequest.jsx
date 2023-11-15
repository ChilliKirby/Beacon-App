import { View, FlatList, Image, Text } from "react-native";
import { useSelector } from "react-redux";

import styles from "../../Styles";
import { useEffect } from "react";
import { useState } from "react";

const FriendRequest = () => {

    const [results, setResults] = useState();
    const id = useSelector((state) => state.user.id);
    const token = useSelector((state) => state.user.token);

    const fetchFriendRequests = async () => {
        console.log("getting friends");
        try {
            const response = await fetch(`http://192.168.86.123:3001/users/${id}/getFriendRequests`,
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


    useEffect(() => {
        fetchFriendRequests();
    }, []);

    const Item = ({ nickName, pictureFile, friendId }) => (
        // <View styles={styles.item}>
        // {/* <Image styles={styles.friendListProfileImage} source={{ uri: image }} /> */}
        <View style={styles.flatListItemContainer}>
            <Image style={styles.flatListItemImage} source={{ uri: pictureFile }} />
            <Text style={styles.flatListItemText}>{nickName}</Text>
                <Text style={styles.mainText}>{friendId}</Text>
        </View>

        // </View>k
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