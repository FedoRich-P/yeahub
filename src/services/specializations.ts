import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SpecializationsApiType } from '@components/FilterGroup/FilterGroup';

export const specializationsApi = createApi({
	reducerPath: 'specializationsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.yeatwork.ru/' }),
	tagTypes: ['Specializations'],
	endpoints: (builder) => ({
		getSpecializations: builder.query<SpecializationsApiType, {page?: number, limit?: number}>({
			query: ({page, limit}) => `specializations?page=${page}&limit=${limit}`,
			providesTags: (result) =>
				result
					? [
						...result.data.map(({ id }) => ({ type: 'Specializations' as const, id })),
						{ type: 'Specializations', id: 'ALL' },
					]
					: [{ type: 'Specializations', id: 'ALL' }],
		}),

		getSkills: builder.query<SpecializationsApiType, {page?: number, limit?: number, specializations: number | null}>({
			query: ({page, limit, specializations}) => `skills?page=${page}&limit=${limit}${specializations && `&specializations=${specializations}`}`,
		}),
	}),
});

export const { useGetSpecializationsQuery, useGetSkillsQuery } = specializationsApi;

export const specializationsReducer = specializationsApi.reducer;

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
