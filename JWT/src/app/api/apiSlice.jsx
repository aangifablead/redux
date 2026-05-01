import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseQuery = fetchBaseQuery({
    baseUrl: 'https://reqres.in/api/',
    prepareHeaders: (headers, { getState }) => {
        // CRITICAL: Ensure this exact string is used with NO extra spaces
        const apiKey = 'reqres_d595026b30b1440aafd7ee23c9e6f6f0';
        headers.set('x-api-key', apiKey);

        // Standard JWT logic
        const token = getState().auth.token;
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }

        return headers;
    },
});

export const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: (builder) => ({}),
});