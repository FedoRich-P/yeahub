import { baseApi } from '@/services/baseApi';
import { SpecializationsApiType } from '@/features/questions-filters/model/types';
import { SkillsApi } from '@/entities/skills/model';

export const skillsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getSkills: builder.query<SpecializationsApiType, SkillsApi>({
			query: ({page, limit, specializations}) => `skills?page=${page}&limit=${limit}${specializations && `&specializations=${specializations}`}`,
			providesTags: (result) =>
				result
					? [
						...result.data.map(({ id }) => ({ type: 'Skills' as const, id })),
						{ type: 'Skills', id: 'ALL' },
					]
					: [{ type: 'Skills', id: 'ALL' }],
		}),
	}),

});

export const {useGetSkillsQuery } = skillsApi;
