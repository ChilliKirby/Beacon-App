import { View } from "react-native";
import styles from "../../Styles.js";
import { useState } from "react";
import { useSelector } from "react-redux";

import { SearchBar } from '@rneui/themed';

const SearchFriend = () => {

    const [userName, setUserName] = useState("");
    const token = useSelector((state) => state.user.token);

    const handleSearch = async () => {


        try{
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
        } catch(error){
            console.log(error);
        }
    };

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
        </View>
    )
}

export default SearchFriend;