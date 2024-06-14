import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currentProjectIndex: null,
	projects: [ ]
}


export const userProjectsSlice = createSlice({
	name: 'userProjects',
	initialState,
	reducers: {
		setCurrentProjectIndex: (state, action) => state.currentProjectIndex = action.payload,
		setProjects: (state, action) => void(state.projects.push(action.payload))
	}
});


export const { setProjects } = userProjectsSlice.actions;

export default userProjectsSlice.reducer;