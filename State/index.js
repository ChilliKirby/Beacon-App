import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    nickName: "",
    id: "", //id set by mongo db
    token: "",
    pictureFile: "",
    friends: [],
    tasks: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setBeaconUser: (state, action) => {
            console.log("set user set all as ...");
            console.log(action.payload);
            state.nickName = action.payload.nickName;
            state.id = action.payload._id,
            state.pictureFile = action.payload.pictureFile;
            state.friends = action.payload.friends;
            // state.tasks = action.payload.tasks;
            state.token = action.payload.token;
            console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
            console.log(state.id);
        },
        setBeaconUserName: (state, action) => {
            state.nickName = action.payload.nickName;
        },
        setBeaconUserImage: (state, action) => {
            state.pictureFile = action.payload.pictureFile;
        }
    }
});

export const { setBeaconUser, setBeaconUserName, setBeaconUserImage } = userSlice.actions;
export default userSlice.reducer;