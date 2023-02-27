import React, { useState } from "react";
import { useDeleteTareaMutation, useEditarEstadoMutation, useEditarTareaMutation } from "../redux/Api";
import {
  Alert,
  AlertIcon,
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  FormLabel,
  Heading,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { AiFillDelete, AiFillEdit, AiFillSave } from "react-icons/ai";
import Swal from "sweetalert2";
import { useAuthStore } from "../redux/zustand";


export const TodoItem = ({ todo }) => {
  const [tarea, setTarea] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [actuEdit, setActuEdit] = useState(false);
  const [indexEdit, setIndexEdit] = useState("");
  const [tareaRealizada, setTareaRealizada] = useState(false);
  const [checked, setChecked] = useState(false);
  const [deleteTask] = useDeleteTareaMutation();
  const [update] = useEditarTareaMutation();
  const [updateEstado] = useEditarEstadoMutation();

  const profileAuth = useAuthStore((state) => state.profile);

  const eliminar = (_id) => {
    deleteTask({ _id, token: profileAuth.token });
  };
  const editar = (_id, tarea, descripcion) => {
    update({
      _id,
      actualizar: { tarea: tarea, descripcion: descripcion },
      token: profileAuth.token,
    });
  };


  const handleOnChangue = (e) => {
    e.preventDefault();
    if (e.target.name === "tarea") {
      setTarea(e.target.value);
    }
    if (e.target.name === "descripcion") {
      setDescripcion(e.target.value);
    }
  };

  // Crear Checkbox
  const onChangeBox = () => {
    if (checked) {
      setChecked(false);
      // console.log(!checked);
      setTareaRealizada(false);
    } else if (!checked) {
      setChecked(true);
      setTareaRealizada(true);
      // console.log(!checked);
    }
  };

  
    const estado = (_id, tarea, descripcion) => {
      updateEstado({
        _id,
        actualizar: { tarea: tarea, descripcion: descripcion },
        checked: false,
        token: profileAuth.token,
      });
      onChangeBox();
    };
  function fireSweetAlert() {
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
      title: "Eliminada con exito",
    });
  }

  function ConnfirmacionTareaRealizada() {
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
      title: "Haz Actualizado tu tarea",
    });
  }

  return indexEdit == todo._id && actuEdit ? (
    <>
      <Card margin={"1px"} w="100%" padding={"10px"} height="100%">
        <CardBody>
          <FormLabel>Tarea</FormLabel>
          <Input
            type="text"
            value={tarea}
            name="tarea"
            onChange={handleOnChangue}
          />
          <FormLabel>Descripcion</FormLabel>
          <Input
            type="text"
            name="descripcion"
            value={descripcion}
            onChange={handleOnChangue}
          />
          <Flex>
            <Box p="4"></Box>
            <Spacer />
            <Box p="4">
              <Button
                className="btn-delete"
                onClick={() => {
                  ConnfirmacionTareaRealizada();
                  editar(todo._id, tarea, descripcion);
                  setActuEdit(!actuEdit);
                }}
                bg={"transparent"}
                _hover={{ bg: "none" }}
              >
                <AiFillSave color="green" />
              </Button>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </>
  ) : (

      <Card margin={"1px"} w="100%" padding={"10px"} height="100%">
        <Box>
          <Box alignItems={"center"} justifyContent="center">
            <Heading
              as="h5"
              size="sm"
              display="flex"
              alignItems={"center"}
              justifyContent="center"
              width="100%"
              height="25px"
              bg={"#F5B003"}
              borderRadius={"15px"}
            >
              Tarea
            </Heading>
            <Text marginLeft={"5px"} marginTop={"10px"} marginBottom={"10px"}>
              {todo.tarea}
            </Text>
            <hr />
            <Heading
              as="h5"
              size="sm"
              display="flex"
              alignItems={"center"}
              justifyContent="center"
              marginTop={"15px"}
            >
              Descripcion
            </Heading>
            <Text marginTop="10px">{todo.descripcion}</Text>
          </Box>
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            margin="auto"
          >
            <div className="round" style={{ width: "70%", marginLeft: "5px" }}>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => {
                      estado(todo._id, tarea, descripcion);
                  onChangeBox(todo._id);
                }}
              />
              {tareaRealizada ? (
                <>
                  <b style={{ color: "green" }}>Realizada</b>
                </>
              ) : (
                <>
                  <b style={{ color: "red" }}>No Realizada</b>
                </>
              )}
            </div>

            <Box
              p="4"
              width="60%"
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-end"}
            >
              <Button
                className="btn-delete"
                onClick={() => eliminar(todo._id)(fireSweetAlert())}
                bg={"transparent"}
                _hover={{ bg: "none" }}
              >
                <AiFillDelete color="red" />
              </Button>
              <Spacer />
              <Button
                className="btn-delete"
                onClick={(e) => {
                  e.preventDefault();
                  setIndexEdit(todo._id);
                  setActuEdit(!actuEdit);
                  setTarea(todo.tarea);
                  setDescripcion(todo.descripcion);
                }}
                bg="transparent"
                _hover={{ bg: "none" }}
              >
                <AiFillEdit color="green" />
              </Button>
            </Box>
          </Box>
        </Box>
      </Card>
 
  );
};
