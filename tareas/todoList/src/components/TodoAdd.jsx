import React, { useState } from "react";
import { usePostAñadirMutation } from "../redux/Api";
import {
  Box,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useAuthStore } from "../redux/zustand";
import Swal from "sweetalert2";

export const TodoAdd = () => {
  const profileAuth = useAuthStore((state) => state.profile);
  const [crearTarea, { data, error, isError, isSuccess }] =
    usePostAñadirMutation();
  const [tarea, setTarea] = useState();
  const [descripcion, setDescripcion] = useState();


//FUNCION PARA CREAR LAS TAREAS 
  const onFormSubmit = (e) => {
    e.preventDefault();
    const tarea = e.target.tarea.value;
    const descripcion = e.target.descripcion.value;
    const estado = false;

    crearTarea({
      añadir: { tarea, descripcion, estado },
      token: profileAuth.token,
    });

    setDescripcion("");
    setTarea("");
  };

  //FUNCIONES PARA LAS ALERTAS
  function TareaRealizada() {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Haz realizado una tu tarea",
    });
  }

  return (
    <>
      <Box display={"flex"} alignItems={"center"} justifyContent="center">
        <form onSubmit={onFormSubmit}>
          <Box
            maxW="100%"
            height="50%"
            margin="10px"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bgColor="#ffff"
          >
            <Input
              type="text"
              className="input-add"
              name="tarea"
              placeholder="Escribe tu Tarea"
              onChange={(e) => {
                setTarea(e.target.value);
              }}
            />
            <Textarea
              type="text"
              className="input-add"
              name="descripcion"
              placeholder="Agrega una descripcion a tu tarea"
              onChange={(e) => {
                setDescripcion(e.target.value);
              }}
            />
          </Box>
          <Button
            type="submit"
            color={"white"}
            bg={"#f5b003"}
            _hover={{ bg: "#FFA900" }}
            w={"100%"}
            margin="5px"
            display={"flex"}
            alignItems={"center"}
            justifyContent="center"
            onClick={() => {
              TareaRealizada();
            }}
          >
            Agregar
          </Button>
        </form>
      </Box>
    </>
  );
};
