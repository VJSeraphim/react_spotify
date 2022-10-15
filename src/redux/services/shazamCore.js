import { CreateApi, fetchBaseQuery }  from '@reduxjs/toolkit/query/react'


export const shazamCoreApi = CreateApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
      prepareHeaders: () => {
        headers.set('X-RapidAPI-Key', 'cd6cd91bf3msh6905a6c6b241644p1e8a3djsndcdb9fa298bd')
        return headers
      }
    }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => '/charts/world'
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/tracks/details?track_id=${songid}`
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `/tracks/related?track_id=${songid}`
    }),
    getArtistDetails: builder.query({
      query: ( artistId ) => `/artists/details?artist_id=${artistId}`
    }),
  })
})

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery
} = shazamCoreApi