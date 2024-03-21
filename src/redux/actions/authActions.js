import { createAction } from "@reduxjs/toolkit";

const current = createAction("CURRENT", (data) => {

    const showData = {
        name: data.firstName +" "+ data.lastName,
        email: data.email,
    }

    return {
        payload:{
            ...showData,            
            logged: true
        }
    }
});

const login = createAction("LOGIN", (token) => {
    localStorage.setItem('token', token)
    return {
        payload:{
            token,
            timeStamp: Date.now(),
            
        }
    }
});

const actions = { current, login };

export default actions;