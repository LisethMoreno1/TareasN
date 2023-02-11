import React, { useState } from "react";
import { useDeleteTareaMutation, useEditarTareaMutation } from "../redux/Api";
import {
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
} from "@chakra-ui/react";
import { AiFillDelete, AiFillEdit, AiFillSave } from "react-icons/ai";

export const TodoItem = ({ todo }) => {
  const [tarea, setTarea] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [actuEdit, setActuEdit] = useState(false);
  const [indexEdit, setIndexEdit] = useState("");
  const [deleteTask] = useDeleteTareaMutation();
  const [update] = useEditarTareaMutation();

  const eliminar = (_id) => {
    deleteTask({ _id });
  };
  const editar = (_id, tarea, descripcion) => {
    update({ _id, actualizar: { tarea: tarea, descripcion: descripcion } });
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

  return indexEdit == todo._id && actuEdit ? (
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
          <Box p="4">
            <Button
              className="btn-delete"
              onClick={() => eliminar(todo._id)}
              colorScheme="red"
            >
              <AiFillDelete />
            </Button>
          </Box>
          <Spacer />
          <Box p="4">
            <Button
              className="btn-delete"
              onClick={() => {
                editar(todo._id, tarea, descripcion);
                setActuEdit(!actuEdit);
              }}
              colorScheme="whatsapp"
            >
              <AiFillSave />
            </Button>
          </Box>
        </Flex>
      </CardBody>
    </Card>
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
          >
            Tarea
          </Heading>
          <Badge colorScheme="green">{todo.tarea}</Badge>
          <Heading
            as="h5"
            size="sm"
            display="flex"
            alignItems={"center"}
            justifyContent="center"
          >
            Descripcion
          </Heading>
          <Badge>{todo.descripcion}</Badge>
        </Box>

        <Flex>
          <Box p="4">
            <Button
              className="btn-delete"
              onClick={() => eliminar(todo._id)}
              colorScheme="red"
            >
              <AiFillDelete />
            </Button>
          </Box>
          <Spacer />
          <Box p="4">
            <Button
              className="btn-delete"
              onClick={(e) => {
                e.preventDefault();
                setIndexEdit(todo._id);
                setActuEdit(!actuEdit);
                setTarea(todo.tarea);
                setDescripcion(todo.descripcion);
              }}
              colorScheme="whatsapp"
            >
              <AiFillEdit />
            </Button>
          </Box>
        </Flex>
      </Box>
    </Card>
  );
};
