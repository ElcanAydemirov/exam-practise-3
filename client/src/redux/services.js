import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const endpoints = {
    products: "products"
}

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `${endpoints.products}`,
            providesTags: ["products"],

        }),
        getById: builder.query({
            query: (id) => `${endpoints.products}/${id}`,
        }),
        editById: builder.mutation({
            query: ({ id, ...body }) => ({
                url: `${endpoints.products}/${id}`,
                method: 'PUT',
                body,
            }),
        }),
        post: builder.mutation({
            query: ({ ...body }) => ({
                url: `${endpoints.products}`,
                method: 'POST',
                body,
            }),
        }),
        deleteById: builder.mutation({
            query: (id) => ({
                url: `${endpoints.products}/${id}`,
                method: 'DELETE',
                
            }),
        }),
    })
})

export const { useGetAllProductsQuery, useDeleteByIdMutation, useEditByIdMutation, useGetByIdQuery, usePostMutation } = productsApi