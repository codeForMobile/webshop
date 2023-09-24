import { Product_URL } from "../const";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: Product_URL
            }),
            keepUnusedDataFor: 5
        })
    })
})

export const { useGetProductsQuery } = productsApiSlice