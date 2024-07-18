import { Product_URL } from "../const";
import { apiSlice } from "./apiSlice";
import { UPLOAD_URL} from '../const'

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({keyword, myPageNumber}) => ({
                url: Product_URL,
                params: {
                    keyword,
                    myPageNumber
                }
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
        }),
        uploadProductImage: builder.mutation({
            query: (data) => ({
                url: `${UPLOAD_URL}`,
                method: 'POST',
                body: data
            })
        }),
        deleteProduct: builder.mutation({
            query: (productId) => ({
                url: `${Product_URL}/${productId}`,
                method: 'DELETE'
            })
        }),
        createReview: builder.mutation({
            query: (data) => ({
                url: `${Product_URL}/${data.productId}/reviews`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Product']
        })
    })
})

export const { useGetProductsQuery, useGetProductDetailsQuery, useCreateProductMutation, useUdpateProductMutation, useUploadProductImageMutation, useDeleteProductMutation, useCreateReviewMutation } = productsApiSlice