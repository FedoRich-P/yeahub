import { PaginatedQuestionsResponse } from '@shared/types';
import { QuestionApi } from '@/entities/question';
import { baseApi } from '@/shared';

export const questionsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getQuestions: builder.query<PaginatedQuestionsResponse, QuestionApi>({
			query: ({ page, specialization, skills, limit, complexity, rate, title }) => {
				const params = new URLSearchParams();
				params.append("page", String(page));
				params.append("limit", String(limit));
				if (title) params.append("title", title);
				if (rate?.length) params.append("rate", rate.join(","));
				if (skills?.length) params.append("skills", skills.join(","));
				if (complexity?.length) params.append("complexity", complexity.join(","));
				if (specialization) params.append("specialization", specialization.toString());
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

