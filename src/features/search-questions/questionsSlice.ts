import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/app/store';

interface questionsState {
	specializations: number;
	skills: string[];
}

const initialState: questionsState = {
	specializations: 1,
	skills: [],
}

export const questionsSlice = createSlice({
	name: 'questions',
	initialState,
	reducers: {
		setSkills: (state, action) => {
			state.skills = action.payload;
		},
		setSpecializations: (state, action) => {
			state.specializations = action.payload;
		}
	},
})

export const {setSkills, setSpecializations} = questionsSlice.actions

export const selectSkills = (state: RootState) => state.questions.skills
export const selectSpecializations = (state: RootState) => state.questions.specializations
