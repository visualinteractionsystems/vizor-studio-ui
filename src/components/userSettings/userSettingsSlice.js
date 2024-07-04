import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	sourcesSettings: [ ]
}


export const userSettingsSlice = createSlice({
	name: 'userSettings',
	initialState,
	reducers: {
		addSourcesSettings: (state, action) => void(state.sourcesSettings.push(action.payload))
	}
});


export const { addSourcesSettings } = userSettingsSlice.actions;

export default userSettingsSlice.reducer;