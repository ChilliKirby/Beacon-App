import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "../Styles";
import { FlatList } from "react-native-web";

const FriendScroll = () => {

    const id = useSelector((state) => state.id);
    const token = useSelector((state) => state.token);
    const friends = useSelector((state) => state.friends);

    const dispatch = useDispatch();

    const getFriends = async () => {

        const response = await fetch(
            `http//:192.168.86.123:3001/users/${id}/friends`,
            {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
            }
        );

        const data = await response.json();
        dispatch(setFriends({ friends: data }));
    }

    useEffect(() => {
        getFriends();
    }, []);

    <View styles={styles.friendListContainer}>
        <FlatList>

        </FlatList>
    </View>
};

export default FriendScroll;