import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { questionsSlice } from '@/features/search-questions/questionsSlice';
import { baseApi } from '@shared/api/baseApi';

export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		[questionsSlice.name]: questionsSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);