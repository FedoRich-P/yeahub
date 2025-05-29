import { baseApi } from '@/services/baseApi';
import { PaginatedQuestionsResponse } from '@/services/types';
import { QuestionApi } from '@/entities/question/model';


export const questionsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getQuestions: builder.query<PaginatedQuestionsResponse, QuestionApi>({
			query: ({ page, specialization, skills, limit, complexity, rate }) => {
				const params = new URLSearchParams();
				params.append("page", String(page));
				if (specialization) params.append("specialization", specialization.toString());
				if (skills?.length) params.append("skills", skills.join(","));
				params.append("limit", String(limit));
				if (complexity?.length) params.append("complexity", complexity.join(","));
				if (rate?.length) params.append("rate", rate.join(","));
				return `questions/public-questions?${params.toString()}`;
			},
			providesTags: (result) =>
				result
					? [...result.data.map(({ id }) => ({ type: 'Questions' as const, id })), { type: 'Questions', id: 'ALL' }]
					: [{ type: 'Questions', id: 'ALL' }],
		}),
	}),
});

export const { useGetQuestionsQuery} = questionsApi;

