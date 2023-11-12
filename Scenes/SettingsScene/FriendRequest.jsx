import { View, FlatList, Image, Text } from "react-native";

import styles from "../../Styles";
import { useEffect } from "react";
import { useState } from "react";

const FriendRequest = () => {

    const [results, setResults] = useState();

    const fetchFriendRequests = async () => {
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
        fetchFriendRequests;
    }, []);

    const Item = ({ nickName, image, friendId }) => {
        <View styles={styles.flatListItemContainer}>
            <Image styles={styles.friendListProfileImage} src={{ uri: image }} />
            <View style={{ justifyContent: 'center', margin: 5 }}>
                <Text style={styles.mainText}>{nickName}</Text>
                <Text style={styles.mainText}>{friendId}</Text>
            </View>

        </View>
    }

    return (
        <View style={styles.mainContainer}>
            <View styles={styles.flatListItemContainer}>
                <FlatList>
                    data={results}
                    renderItem={(item) => <Item nickName={item.nickName} image={item.pictureFile} friendId={item._id} /> }
                </FlatList>
            </View>
        </View>
    )
}

export default FriendRequest;