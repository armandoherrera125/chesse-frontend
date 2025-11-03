import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const saleApi = createApi({
    reducerPath: 'saleApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1/' }),
    endpoints: (builder) => ({
        getSales: builder.query({
            query: () => `sales`
        }),
        postSales: builder.mutation({
            query: (body) => ({
                url: `sales`,
                method: 'POST',
                body
            })
        }),
    })
});

export const { useGetSalesQuery, usePostSalesMutation } = saleApi;