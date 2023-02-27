import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8500/api" }),
  tagTypes: ["alias", "refreshDatosTabla"],
  keepUnusedDataFor: 3,
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,

  endpoints: (builder) => ({
    getTarea: builder.query({
      query: (token) => ({
        headers: { "Content-Type": "application/json", token },
        method: "GET",
        url: "/tareas",
      }),
      providesTags: ["alias"],
    }),
    postAñadir: builder.mutation({
      query: ({ añadir, token }) => ({
        headers: { "Content-Type": "application/json", token },
        method: "POST",
        body: añadir,
        url: "/tareas",
      }),
      invalidatesTags: ["alias", "refreshDatosTabla"],
    }),
    postAñadirUsuario: builder.mutation({
      query: (datosRegistro) => ({
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: datosRegistro,
        url: "/usuarios",
      }),
      invalidatesTags: ["alias", "refreshDatosTabla"],
    }),
    deleteTarea: builder.mutation({
      query: ({ _id, token }) => ({
        headers: { "Content-Type": "application/json", token },
        method: "DELETE",
        url: `/tareas/${_id}`,
      }),
      invalidatesTags: ["alias", "refreshDatosTabla"],
    }),
    editarTarea: builder.mutation({
      query: ({ _id, actualizar, token }) => ({
        headers: { "Content-Type": "application/json", token },
        method: "PUT",
        url: `/tareas/${_id}`,
        body: actualizar,
      }),
      invalidatesTags: ["alias", "refreshDatosTabla"],
    }),
    editarEstado: builder.mutation({
      query: ({ _id, actualizar, estado }) => ({
        headers: { "Content-Type": "application/json" },
        method: "PUT",
        url: `/tareas/${_id} , ${estado}`,
        body: actualizar,
      }),
      invalidatesTags: ["alias", "refreshDatosTabla"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetTareaQuery,
  usePostAñadirMutation,
  useDeleteTareaMutation,
  useEditarTareaMutation,
  useEditarEstadoMutation,
  usePostAñadirUsuarioMutation,
} = Api;