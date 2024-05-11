import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "../Axios";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),

  endpoints: (builder) => ({
    getAllAuth: builder.query({
      query: () => ({
        url: "/auth/",
        method: "GET",
      }),
    }),
    getAuthById: builder.query({
      query: (id) => {
        console.log("ID:", id);
        return {
          url: `/auth/${id}`,
          method: "GET",
        };
      },
    }),

    getAuthByLimit: builder.query({
      query: (num) => {
        console.log("Limit Number:", num);
        return {
          url: `auth?_limit=${num}`,
          method: "GET",
        };
      },
    }),

    deleteAuth: builder.mutation({
      query: (id) => {
        console.log("Delete ID:", id);
        return {
          url: `/auth/${id}`,
          method: "DELETE",
        };
      },
    }),
    // post data
    createAuth: builder.mutation({
      query: (newPost) => {
        console.log("Create Post: ", newPost);
        return {
          url: `/auth/`,
          method: "POST",
          body: newPost,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),

    // update
    updateAuth: builder.mutation({
      query: (updatePostData) => {
        console.log("Update Post: ", updatePostData);
        const { id, ...data } = updatePostData;
        console.log("Actual Update Post: ", data);
        return {
          url: `/auth/${id}`,
          method: "PUT",
          body: data,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
  }),
});

export const {
  useGetAllAuthQuery,
  useGetAuthByIdQuery,
  useGetAuthByLimitQuery,
  useDeleteAuthMutation,
  useCreateAuthMutation,
  useUpdateAuthMutation,
} = authApi;
