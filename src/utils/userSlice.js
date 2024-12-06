import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        addUser: (state, action) => {
            state.userData = action.payload;
        },
        deleteUser: (state) => {
            state.userData = {};
        }
    }
})

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;