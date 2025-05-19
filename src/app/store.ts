import { configureStore } from '@reduxjs/toolkit'
import { questionApi, questionReducer } from '@/services/questions';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
	reducer: {
		[questionApi.reducerPath]: questionReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(questionApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)