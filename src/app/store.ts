import { configureStore } from '@reduxjs/toolkit'
import { questionApi, questionReducer } from '@/services/questions';
import { setupListeners } from '@reduxjs/toolkit/query';
import { specializationsApi, specializationsReducer } from '@/services/specializations';
import { questionsSlice } from '@/features/questions/questionsSlice';

export const store = configureStore({
	reducer: {
		[questionApi.reducerPath]: questionReducer,
		[specializationsApi.reducerPath]: specializationsReducer,
		[questionsSlice.name]: questionsSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(questionApi.middleware).concat(specializationsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)