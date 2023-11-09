import { View, FlatList, Text, Image } from "react-native";
import styles from "../../Styles.js";
import { useState } from "react";
import { useSelector } from "react-redux";

import { SearchBar } from '@rneui/themed';
import { Pressable } from "react-native";


const SearchFriend = ({ navigation }) => {

    const [userName, setUserName] = useState("");
    const [dataResults, setDataResults] = useState(null);
    const token = useSelector((state) => state.user.token);

    const handleSearch = async () => {


        try {
            const response = await fetch(`http://192.168.86.123:3001/users/${userName}/search`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },

                }
            )

            const results = await response.json();
            console.log(results);
            setDataResults(results);

        } catch (error) {
            console.log(error);
        }
    };

    const Item = ({ nickName, image }) => (
        <View style={styles.flatListItemContainer}>
            <Image style={styles.friendListProfileImage} source={{ uri: image }} />

            <Pressable
                onPress={() => {
                    navigation.navigate("View Profile", {nickName: nickName, pictureFile: image});
                }}
            >
                <View style={{ justifyContent: 'center', margin: 5 }}>
                    <Text style={styles.mainText}>{nickName}</Text>
                </View>
            </Pressable>
        </View>
    );

    return (
        <View style={styles.mainContainer}>
            <View style={styles.searchBarContainer}>
                <SearchBar
                    placeholder="Search friend..."
                    onChangeText={setUserName}
                    value={userName}
                    onEndEditing={handleSearch}
                >

                </SearchBar>
            </View>

            {dataResults != null &&
                // <Text style={styles.mainText}>{dataResults[0].nickName}</Text>
                <View style={styles.searchResultsFlatlistContainer}>
                    <FlatList

                        data={dataResults}
                        renderItem={({ item }) => <Item nickName={item.nickName} image={item.pictureFile} />}
                    />
                </View>
            }
        </View>
    )
}

export default SearchFriend;