import { USERS_URL } from "../const";
import { apiSlice } from "./apiSlice";
import * as texts from '../texts'

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/${texts.authRoute}`, 
                method: 'POST',
                body: data
            })
        }), 
        logout: builder.mutation({
            query: () =>({
                url: `${USERS_URL}/${texts.logoutRoute}`,
                method: 'POST'
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}`,
                method: 'POST',
                body: data
            })
        }),
        profile: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/profile`,
                method: 'PUT',
                body: data
            })
        }),
        getUser: builder.query({
            query: () => ({
                url: `${USERS_URL}`,
                method: 'GET'
            }),
            keepUnusedDataFor: 5,
            providesTags: ['User']
        })
    })
})

export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useProfileMutation, useGetUserQuery } = usersApiSlice