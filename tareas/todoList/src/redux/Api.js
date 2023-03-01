import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Definir un servicio utilizando una URL base y expected endpoints
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
    postAñadirUsuario: builder.query({
      query: (datosRegistro) => ({
        headers: { "Content-Type": "application/json" },
        method: "PATCH",
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
      query: ({ _id, actualizarEstado, token }) => ({
        headers: { "Content-Type": "application/json", token },
        method: "PUT",
        url: `/tareas/${_id}`,
        body: actualizarEstado,
      }),
      invalidatesTags: ["alias", "refreshDatosTabla"],
    }),
    postAñadirUsuarioNuevo: builder.mutation({
      query: (añadirUsuario) => ({
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: añadirUsuario,
        url: "/usuarios",
      }),
      invalidatesTags: ["alias", "refreshDatosTabla"],
    }),
  }),
});

// exportar hook para su uso en componentes funcionales, que son autogenerados en función de los extremos definidos
export const {
  useGetTareaQuery,
  usePostAñadirMutation,
  useDeleteTareaMutation,
  useEditarTareaMutation,
  useEditarEstadoMutation,
  usePostAñadirUsuarioQuery,
  usePostAñadirUsuarioNuevoMutation
} = Api;