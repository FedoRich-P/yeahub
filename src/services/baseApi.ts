import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
	reducerPath: 'questionsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.yeatwork.ru/' }),
	endpoints: () => ({}),
	tagTypes: ['Questions', 'Question', 'Skills', 'Specializations'],
})

