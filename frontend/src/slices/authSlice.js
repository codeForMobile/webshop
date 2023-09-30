import { createSlice } from "@reduxjs/toolkit";
import * as texts from "../texts";

const initialState = {
    userInfo: localStorage.getItem(texts.userInfo) ? JSON.parse(localStorage.getItem('userInfo')) : null
}

const authSlice = createSlice({
    name: texts.authRoute,
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo =  action.payload
            localStorage.setItem(texts.userInfo, JSON.stringify(action.payload))
        },
        logout: (state, action) => {
            state.userInfo = null
            localStorage.removeItem(texts.userInfo)
        }
    }
})

export const {setCredentials, logout } = authSlice.actions

export default authSlice.reducer