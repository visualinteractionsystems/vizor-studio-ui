import { configureStore } from '@reduxjs/toolkit';

import authReducer from './components/auth/authSlice';
import mainMenuReducer from './components/mainMenu/mainMenuSlice';
import userProjectsReducer from './components/userProjects/userProjectsSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        mainMenu: mainMenuReducer,
        userProjects: userProjectsReducer
    },
})