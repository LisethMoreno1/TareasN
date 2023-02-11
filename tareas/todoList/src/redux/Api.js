import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8500/api/users" }),
  tagTypes: ["alias", "refreshDatosTabla"],
  keepUnusedDataFor: 3,
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getTarea: builder.query({
      query: () => ({
        headers: { "Content-Type": "application/json" },
        method: "GET",
      }),
      providesTags: ["alias"],
    }),
    postAñadir: builder.mutation({
      query: (añadir) => ({
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: añadir,
      }),
      invalidatesTags: ["alias", "refreshDatosTabla"],
    }),
    deleteTarea: builder.mutation({
      query: ({ _id }) => ({
        headers: { "Content-Type": "application/json" },
        method: "DELETE",
        url: `/${_id}`,
      }),
      invalidatesTags: ["alias", "refreshDatosTabla"],
    }),
    editarTarea: builder.mutation({
      query: ({ _id, actualizar }) => ({
        headers: { "Content-Type": "application/json" },
        method: "PUT",
        url: `/${_id}`,
        body: actualizar,
      }),
      invalidatesTags: ["alias", "refreshDatosTabla"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTareaQuery ,usePostAñadirMutation,useDeleteTareaMutation, useEditarTareaMutation } = Api