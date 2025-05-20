import { baseApi } from '@/services/baseApi';
import { PaginatedQuestionsResponse } from '@/services/types';

export const questionApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getQuestions: builder.query<PaginatedQuestionsResponse, { page: number }>({
			query: ({ page }) => `questions/public-questions?page=${page}`,
			providesTags: (result) =>
				result
					? [
						...result.data.map(({ id }) => ({ type: 'Questions' as const, id })),
						{ type: 'Questions', id: 'ALL' },
					]
					: [{ type: 'Questions', id: 'ALL' }],
		}),
		getQuestionById: builder.query<Question, { id: string | undefined }>({
			query: ({ id }) => `questions/public-questions/${id}`,
		// 	providesTags: (result) =>
		// 		result
		// 			? [
		// 				...result.data.map(({ id }) => ({ type: 'Questions' as const, id })),
		// 				{ type: 'Questions', id: 'ALL' },
		// 			]
		// 			: [{ type: 'Questions', id: 'ALL' }],
		}),
	}),
});

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionApi;

export const questionReducer = questionApi.reducer

export interface User {
	id: string;
	username: string;
}

export interface Specialization {
	id: number;
	title: string;
	description: string;
	imageSrc: string;
	createdAt: string;
	updatedAt: string;
}

export interface Skill {
	id: number;
	title: string;
	description: string;
	imageSrc: string;
	createdAt: string;
	updatedAt: string;
}

export interface Question {
	id: number;
	title: string;
	description: string;
	code: string;
	imageSrc: string;
	keywords: string[];
	longAnswer: string;
	shortAnswer: string;
	status: "public" | "private" | "draft"; // можно расширить, если есть другие значения
	complexity: number;
	rate: number;
	createdById: string;
	updatedById: string;
	createdBy: User;
	updatedBy: User;
	questionSpecializations: Specialization[];
	questionSkills: Skill[];
	createdAt: string;
	updatedAt: string;
}


