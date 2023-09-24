import { Product_URL } from "../const";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: Product_URL
            }),
            keepUnusedDataFor: 5
        }),
        getProductDetails: builder.query({
            query: (productId) => ({
                url: `${Product_URL}/${productId}`
            }), 
            keepUnusedDataFor: 5
        })
    })
})

export const { useGetProductsQuery, useGetProductDetailsQuery } = productsApiSlice