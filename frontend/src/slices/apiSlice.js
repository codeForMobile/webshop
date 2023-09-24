import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { BASE_URL } from '../const.js'

const baseQuery = fetchBaseQuery({baseUrl: BASE_URL})

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Product', 'User', 'Order'],
    endpoints: (builder) => ({})
})

