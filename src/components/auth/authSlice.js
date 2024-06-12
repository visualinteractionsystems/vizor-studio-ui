import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	username: null,
	token: null,
	userData: { }
}


export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setToken: (state, action) => state.token = action.payload,
		setUserData: (state, action) => state.userData = action.payload,
		setUsername: (state, action) => { console.log(state, action); state.username = action.payload; } 
	}
});


export const { setToken, setUserData, setUsername } = authSlice.actions;

export default authSlice.reducer;