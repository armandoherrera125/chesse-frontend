import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1/' }),
    endpoints: (builder) => ({
        postLogin: builder.mutation({
            query: (body) => ({
                url: `auth/login`,
                method: 'POST',
                body
            })
        }),
        postNewUser: builder.mutation({
            query: (body) => ({
                url: `auth/newuser`,
                method: 'POST',
                body
            })
        })
    })
});

export const { usePostLoginMutation, usePostNewUserMutation } = authApi;