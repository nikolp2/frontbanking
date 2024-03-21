import { createReducer } from "@reduxjs/toolkit";
import authActions from "../actions/authActions";

const { login, current } = authActions;

const initialState = {
    user: {
        name: "",
        mail: "",
        logged: null,
    },
    token: null,
    timeStamp: null, // Date.now()
};

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(login, (state, action) => {
            return {
                ...state,
                token: action.payload.token,
                timeStamp: action.payload.timeStamp,
            };
        })
        .addCase(current, (state, action) => {
            return {
                ...state,
                user: action.payload,
            };
        });
});

export default authReducer;