import React, { useState } from "react";
import { usePostAñadirMutation } from "../redux/Api";
import {  Box, Button, Input, Textarea } from "@chakra-ui/react";

export const TodoAdd = () => {
  const [crearTarea, { data, error, isError, isSuccess }] =
    usePostAñadirMutation();
  const [tarea, setTarea] = useState();
  const [descripcion, setDescripcion] = useState();


  const onFormSubmit = (e) => {
    e.preventDefault();
    const tarea = e.target.tarea.value;
    const descripcion = e.target.descripcion.value;
    crearTarea({
      tarea,
      descripcion,
    });
    console.log("listo");
    setDescripcion("");
    setTarea("");
  };


  return (
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
            placeholder="Agreaga una descripcion a tu tarea"
            onChange={(e) => {
              setDescripcion(e.target.value);
            }}
          />
        </Box>
        <Button
          type="submit"
          colorScheme="whatsapp"
          w={"100%"}
          margin="5px"
          display={"flex"}
          alignItems={"center"}
          justifyContent="center"
        >
          Agregar 
        </Button>
        
      </form>
    </Box>
  );
};
