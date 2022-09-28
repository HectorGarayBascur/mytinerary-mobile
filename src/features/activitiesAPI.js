import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import url from '../api'

export const activitiesAPI = createApi({
    reducerPath: "activitiesAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: url
    }),

    endpoints: (builder) => ({
        getAllActivities: builder.query({
            query: () => '/activities'
        }),
        getActivities: builder.query({
            query: (id) => '/activities?itinerary=' + id
        })
    })

})

export default activitiesAPI
export const { useGetAllActivitiesQuery, useGetActivitiesQuery } = activitiesAPI