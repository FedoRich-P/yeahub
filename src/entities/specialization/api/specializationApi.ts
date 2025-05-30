import { baseApi } from '@shared/api/baseApi';
import { SpecializationsApiType, SpecializationsResApi } from '@/entities/specialization/model';

export const specializationsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getSpecializations: builder.query<SpecializationsApiType, SpecializationsResApi>({
			query: ({ page, limit }) => `specializations?page=${page}&limit=${limit}`,
			providesTags: (result) =>
				result
					? [
						...result.data.map(({ id }) => ({ type: 'Specializations' as const, id })),
						{ type: 'Specializations', id: 'ALL' },
					]
					: [{ type: 'Specializations', id: 'ALL' }],
		}),
	}),
});

export const { useGetSpecializationsQuery } = specializationsApi;
