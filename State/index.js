import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    nickName: "",
    id: "", //id set by mongo db
    token: "",
    pictureFile: "",
    friends: [],
    friendsObjects: null,
    tasks: [],
    bio: "",
    friendRequests: [],

    profileViewNickName: "",
    profileViewPictureFile: "",
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setBeaconUser: (state, action) => {
            console.log("set user set all as ...");
            console.log(action.payload);
            state.nickName = action.payload.nickName;
            state.id = action.payload.id,
            state.pictureFile = action.payload.pictureFile;
            state.friends = action.payload.friends;
            state.bio = action.payload.bio;
            state.friendRequests = action.payload.friendRequests;
            // state.tasks = action.payload.tasks;
            state.token = action.payload.token;
            console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
            console.log(state.id);
            console.log(state.token);
            console.log(state.nickName);
            console.log(state.friends);
        },
        setLogOut : (state, action) => {
            state.nickName = null;
            state.id = null;
            state.token = null;
            state.friends = null;
            state.friendsObjects = null;
            console.log("log outtttt");
            console.log(state.id);
            console.log(state.token);
            console.log(state.nickName);
            console.log(state.friendsObjects);
        },
        setBeaconUserName: (state, action) => {
            state.nickName = action.payload.nickName;
        },
        setBeaconUserImage: (state, action) => {
            if(state.user){
            state.pictureFile = action.payload.pictureFile;
            } else {
                console.error("no user found");
            }
        },
        setFriendsObjects: (state, action) => {
            console.log("erase");
            state.friendsObjects = action.payload.friendsObjects;
            console.log(state.friendsObjects);
        },
        setViewProfile: (state, action) => {
            state.profileViewNickName = action.payload.nickName;
            state.profileViewPictureFile = action.payload.pictureFile;
        }
    }
});

export const { setBeaconUser, setBeaconUserName, setBeaconUserImage, setFriendsObjects, setViewProfile, setLogOut } = userSlice.actions;
export default userSlice.reducer;