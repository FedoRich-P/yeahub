import { baseApi } from '@shared/api/baseApi';
import { Question } from '@shared/types';

export const questionApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getQuestionById: builder.query<Question, { id: string | undefined }>({
			query: ({ id }) => `questions/public-questions/${id}`,
			providesTags: ['Question'],
		}),
	}),
});

export const { useGetQuestionByIdQuery } = questionApi;
