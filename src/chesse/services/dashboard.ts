import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dashboardApi = createApi({
    reducerPath: 'dashboardApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1/' }),
    endpoints: (builder) => ({
        getDashBoard: builder.query({
            query: () => `dashboard`
        })
    })
});

export const { useGetDashBoardQuery } = dashboardApi;