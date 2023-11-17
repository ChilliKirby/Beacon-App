import { View, Text, Image, Pressable, FlatList } from 'react-native';
import styles from '../../Styles.js';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFriends } from '../../State/index.js';


const ProfileScene = ({ navigation }) => {

    const [friends, setFriends] = useState();
    const [refresh, setRefresh] = useState(true);

    const id = useSelector((state) => state.user.id);
    const token = useSelector((state) => state.user.token);
    //const friends = useSelector((state) => state.user.friends);
    const nickName = useSelector((state) => state.user.nickName);

    const dispatch = useDispatch();

    const getFriends = async () => {

        if(refresh){
        const response = await fetch(`http://192.168.86.123:3001/users/${id}/friends`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            }
        );

        const data = await response.json();
        console.log("jklkjkljj");
        console.log(nickName);
        console.log("ppppppppp");
        console.log(id);
        // dispatch((setFriends({
        //     friends: data
        // })));
        //setRefresh(false);
        setFriends(data);
        console.log(friends);
    } else{

    }
        //setFriends(data);
    }

    const Item = ({ nickName, pictureFile, friendId }) => (
        <View style={styles.flatListItemContainer}>
            <Image style={styles.flatListItemImage} source={{ uri: pictureFile }} />
            <Text style={styles.mainText}> {nickName} </Text>

        </View>
    )
    //

    const check = () => {
        console.log("check");
        if(!friends){
            getFriends();
        }
    }

    useEffect(() => {
        // const unsubscribe = navigation.addListener('focus', () => {
          // Place your refresh logic here
          console.log('Screen is focused, refreshing...');
          
          getFriends();
          //Trigger the data refresh or any other necessary actions
       // });//
    
        // return unsubscribe;
      }, []);

    // useEffect(() => {
        
    //     check();

    //     return () => {
    //         // Clean-up code here
    //         setFriends(null);
    //         console.log('Clean-up code when currentScreen changes');
    //       };
    //     // if (id && token && (friends == [])) {
    //     //     getFriends();
    //     // }

    //     // const unsubscribe = navigation.addListener('blur', () => {
    //     //     // Your effect code here, this runs when the screen comes into focus
    //     //     // console.log('Screen is focused, running effect...');
    //     //     // getFriends();
    //     //     //setRefresh(true);
    //     //     console.log("blur");
    //     //     setFriends(null);
    //     // });

    //     // return unsubscribe;
    //     // getFriends();
    // });

    // useEffect(() => {
    //     if (friends == null) {
    //         getFriends();
    //     }
    // },[])

    return (
        <View style={styles.mainContainer}>

            <View style={{ height: '20%' }}>
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
            </View>

            <View style={{ height: '20%' }}>
                <View style={styles.textContainer}>
                    <Text
                        style={styles.largeMainText}
                        adjustsFontSizeToFit={true}
                    >
                        {nickName}
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

            <View style={{ height: '60%', backgroundColor: '#339' }}>

                {friends && (
                // <FlatList
                //     data={friends}
                //     renderItem={({ item }) => <Item nickName={item.nickName} pictureFile={item.pictureFile} friendId={item.id} />}
                //     keyExtractor={item => item.id}
                    
                // />

                <FlatList
                   data={friends}
                   renderItem={({ item }) => <Item nickName={item.nickName} pictureFile={item.pictureFile} friendId={item.id} />}
                // renderItem={(item) => <Item nickName={item.nickName} image={item.pictureFile} friendId={item.id} />}
                   keyExtractor={item => item.id}
            >
            </FlatList>
                )}
            </View>
        </View>
    )
}

export default ProfileScene;