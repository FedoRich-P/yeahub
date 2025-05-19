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
	}),
});

export const { useGetQuestionsQuery } = questionApi;

export const questionReducer = questionApi.reducer


