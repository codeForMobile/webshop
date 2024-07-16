import { Product_URL } from "../const";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: Product_URL
            }),
            keepUnusedDataFor: 5,
            providesTags: ['Product']
        }),
        getProductDetails: builder.query({
            query: (productId) => ({
                url: `${Product_URL}/${productId}`
            }), 
            keepUnusedDataFor: 5
        }),
        createProduct: builder.mutation({
            query: () => ({
                url: Product_URL,
                method: 'POST'
            }),
            invalidatesTags: ['Product']
        }),
        udpateProduct: builder.mutation({
            query: (data) => ({
                url: `${Product_URL}/${data.productId}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['Product']
        })
    })
})

export const { useGetProductsQuery, useGetProductDetailsQuery, useCreateProductMutation, useUdpateProductMutation } = productsApiSlice