import { SpecializationsApiType, SpecializationsResApi } from '@/entities/specialization';
import { baseApi } from '@/shared';

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
