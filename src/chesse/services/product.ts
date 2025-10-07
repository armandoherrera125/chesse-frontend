import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1/' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ limit, page }) => `products?limit=${limit}&page=${page}`
        })
    })
});

export const { useLazyGetProductsQuery } = productApi;