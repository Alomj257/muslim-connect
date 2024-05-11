import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseUrl from "../Axios";

// It is used to define our endpoints and allow to create the API slice
export const gigsApi = createApi({
  reducerPath: "gigsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),

  endpoints: (builder) => ({
    getAllGigs: builder.query({
      query: () => ({
        url: "/gigs/",
        method: "GET",
      }),
    }),
    getGigsById: builder.query({
      query: (id) => {
        console.log("ID:", id);
        return {
          url: `/gigs/${id}`,
          method: "GET",
        };
      },
    }),

    getGigsByLimit: builder.query({
      query: (num) => {
        console.log("Limit Number:", num);
        return {
          url: `gigs?_limit=${num}`,
          method: "GET",
        };
      },
    }),

    deleteGigs: builder.mutation({
      query: (id) => {
        console.log("Delete ID:", id);
        return {
          url: `/gigs/${id}`,
          method: "DELETE",
        };
      },
    }),
    // post data
    createGigs: builder.mutation({
      query: (newPost) => {
        // console.log("Create Post: ", newPost);
        const formData = new FormData();
        for (const [key, value] of Object.entries(newPost)) {
          formData.append(key, value);
        }
        return {
          url: `/gigs/`,
          method: "POST",
          body: formData,
          headers: {
            "Content-type": "multipart/form-data",
          },
        };
      },
    }),

    // update
    updateGigs: builder.mutation({
      query: (updatePostData) => {
        console.log("Update Post: ", updatePostData);
        const { id, ...data } = updatePostData;
        console.log("Actual Update Post: ", data);
        return {
          url: `/gigs/${id}`,
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
  useGetAllGigsQuery,
  useGetGigsByIdQuery,
  useGetGigsByLimitQuery,
  useDeleteGigsMutation,
  useCreateGigsMutation,
  useUpdateGigsMutation,
} = gigsApi;
