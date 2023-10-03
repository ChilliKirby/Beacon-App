import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    nickName: "",
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
            // state.pictureFile = action.payload.pictureFile;
            // state.friends = action.payload.friends;
            // state.tasks = action.payload.tasks;
        },
        setBeaconUserName: (state, action) => {
            
        }
    }
});

export const { setBeaconUser } = userSlice.actions;
export default userSlice.reducer;