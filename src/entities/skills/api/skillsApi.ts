import { baseApi } from '@shared/api/baseApi';
import { SkillsApi, SkillsApiType } from '@/entities/skills/model';

export const skillsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getSkills: builder.query<SkillsApiType, SkillsApi>({
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
