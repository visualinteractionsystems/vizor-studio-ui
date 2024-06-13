import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	projects: [ ]
}


export const userProjectsSlice = createSlice({
	name: 'userProjects',
	initialState,
	reducers: {
		setProjects: (state, action) => void(state.projects.push(action.payload))
	}
});


export const { setProjects } = userProjectsSlice.actions;

export default userProjectsSlice.reducer;