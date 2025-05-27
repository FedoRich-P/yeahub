import { PaginatedQuestionsResponse } from '@/services/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const questionApi = createApi({
	reducerPath: 'questionsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.yeatwork.ru/' }),
	tagTypes: ['Questions'],
	endpoints: (builder) => ({
		getQuestions: builder.query<PaginatedQuestionsResponse, { page: string |  null, limit?: number, specialization: string | null, skills: string[] | null }>({
			query: ({ page = '1', specialization, skills }) => {
				const params = new URLSearchParams();
				params.append("page", String(page));
				if (specialization) params.append("specialization", specialization.toString());
				if (skills?.length) params.append("skills", skills.join(","));
				// params.append("limit", String(limit));
				// if (complexity?.length) params.append("complexity", complexity.join(","));
				return `questions/public-questions?${params.toString()}`;
			},
			providesTags: (result) =>
				result
					? [...result.data.map(({ id }) => ({ type: 'Questions' as const, id })), { type: 'Questions', id: 'ALL' }]
					: [{ type: 'Questions', id: 'ALL' }],
		}),
		getQuestionById: builder.query<Question, { id: string | undefined }>({
			query: ({ id }) => `questions/public-questions/${id}`,
		}),
		getSpecializations: builder.query<Question, { id: number | null }>({
			query: ({ id }) => `specializations/${id}`,
		}),
	}),
});

export const { useGetQuestionsQuery, useGetQuestionByIdQuery, useGetSpecializationsQuery } = questionApi;

export const questionReducer = questionApi.reducer;

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
	status: 'public' | 'private' | 'draft'; // можно расширить, если есть другие значения
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
