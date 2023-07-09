import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const flaskCoreAPI = createApi({
  reducerPath: "flaskCoreAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.39.188:3000/",
  }),
  endpoints: (builder) => ({
    getPlaylist: builder.query({ query: (playlistID) => `playlist/${playlistID}` }),
    getArtist: builder.query({ query: (artistID) => `artist/${artistID}` }),
    getSong: builder.query({ query: (songID) => `song/${songID}` }),

    getMasterPlaylist: builder.query({ query: () => "playlist/master" }),
    getMasterArtist: builder.query({ query: () => "artist/master" }),
    getMasterSong: builder.query({ query: () => "song/master" }),

    createSong: builder.mutation({
      query: (songID) => ({
        method: "POST",
        url: `song/${songID}`,
      }),
    }),
    createPlaylist: builder.mutation({
      query: (playlistID) => ({
        method: "POST",
        url: `playlist/${playlistID}`,
      }),
    }),

    deleteSong: builder.mutation({
      query: (songID) => ({
        method: "DELETE",
        url: `song/${songID}`,
      }),
    }),
    deletePlaylist: builder.mutation({
      query: (playlistID) => ({
        method: "DELETE",
        url: `playlist/${playlistID}`,
      }),
    }),

  }),
});

export const {
  useGetPlaylistQuery,
  useGetArtistQuery,
  useGetSongQuery,

  useGetMasterPlaylistQuery,
  useGetMasterArtistQuery,
  useGetMasterSongQuery,

  useCreateSongMutation,
  useCreatePlaylistMutation,
  useDeleteSongMutation,
  useDeletePlaylistMutation,
} = flaskCoreAPI;
