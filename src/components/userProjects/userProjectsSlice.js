import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currentProjectIndex: -1,
	projects: [ ]
}


export const userProjectsSlice = createSlice({
	name: 'userProjects',
	initialState,
	reducers: {
		setCurrentProjectIndex: (state, action) => void(state.currentProjectIndex = action.payload),
		setProjects: (state, action) => void(state.projects.push(action.payload))
	}
});


export const { setCurrentProjectIndex, setProjects } = userProjectsSlice.actions;

export default userProjectsSlice.reducer;