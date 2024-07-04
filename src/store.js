import { configureStore } from '@reduxjs/toolkit';

import authReducer from './components/auth/authSlice';
import mainMenuReducer from './components/mainMenu/mainMenuSlice';
import userProjectsReducer from './components/userProjects/userProjectsSlice';
import userSettingsReducer from './components/userSettings/userSettingsSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        mainMenu: mainMenuReducer,
        userProjects: userProjectsReducer,
        userSettings: userSettingsReducer
    },
})