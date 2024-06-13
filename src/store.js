import { configureStore } from '@reduxjs/toolkit';

import authReducer from './components/auth/authSlice';
import userProjectsReducer from './components/userProjects/userProjectsSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        userProjects: userProjectsReducer
    },
})