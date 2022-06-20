import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const saveApi = createApi({
    reducerPath: "saveApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3006/" }),
    endpoints:(builder) => ({
        save: builder.query({
            query: () => '/save'
        }),
    })
})

export const { useSaveQuery } = saveApi;