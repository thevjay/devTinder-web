import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("user")) || null;

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        addUser:(state,action) =>{
            localStorage.setItem('user',JSON.stringify(action.payload)); //save user to localStorage
            return action.payload;
        },
        removeUser:(state,action)=>{
            localStorage.removeItem('user');  // Clear localStorage on logout
            return null;
        }
    }
})

export const { addUser , removeUser } = userSlice.actions;

export default userSlice.reducer;