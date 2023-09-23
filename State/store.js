import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../State/index.js';

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
})