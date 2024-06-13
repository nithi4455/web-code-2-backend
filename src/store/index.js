import {configureStore, createSlice} from '@reduxjs/toolkit' ;

const userSlice = createSlice({
    name : "user",
    initialState :{isLoggedIn: false},
    reducers:{
        login (state) {
            state.isLoggedIn = true
        },
        logout(state) {
            localStorage.removeItem("userId")
            state.isLoggedIn = false
        }, 
    }
})

export const userAction = userSlice.actions

export const adminSlice = createSlice({
    name : "auth",
    initialState:{isLoggedIn: false},
    reducer:{
        login (state) {
            state.isLoggedIn = true
        },
        logout(state) {
            localStorage.removeItem("adminId")
            localStorage.removeItem("token");
            state.isLoggedIn = false
        }, 
    }
})

export const adminAction = adminSlice.action

export const store = configureStore({
    reducer:{
        user : userSlice.reducer,
        admin: adminSlice.reducer
    }
})