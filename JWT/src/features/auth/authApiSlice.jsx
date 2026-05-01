import { apiSlice } from "../../app/api/apiSlice";

// src/features/auth/authApiSlice.jsx

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: 'login', // NO leading slash here
        method: 'POST',
        body: credentials // Should contain { email, password }
      })
    }),
  })
});
export const { useLoginMutation } = authApiSlice;