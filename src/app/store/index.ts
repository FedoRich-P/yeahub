import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { questionsSlice } from '@/features/questions/model/questionsSlice';
import { baseApi } from '@/services/baseApi';

export const index = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		[questionsSlice.name]: questionsSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof index.getState>;
export type AppDispatch = typeof index.dispatch;

setupListeners(index.dispatch);