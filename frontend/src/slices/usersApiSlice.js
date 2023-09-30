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
        })
    })
})

export const { useLoginMutation, useLogoutMutation } = usersApiSlice