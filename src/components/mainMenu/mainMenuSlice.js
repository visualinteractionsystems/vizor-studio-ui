import { createSlice } from '@reduxjs/toolkit';
import { MY_PROJECTS } from './constants';

const initialState = {
	currentSelectedOption: MY_PROJECTS
}


export const mainMenuSlice = createSlice({
	name: 'mainMenu',
	initialState,
	reducers: {
		setCurrentSelectedOption: (state, action) => void(state.currentSelectedOption = action.payload)
	}
});


export const { setCurrentSelectedOption } = mainMenuSlice.actions;

export default mainMenuSlice.reducer;