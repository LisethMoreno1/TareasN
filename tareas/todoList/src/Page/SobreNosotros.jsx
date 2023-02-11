import React from "react";

import {
  List,
  ListItem,
  ListIcon,
  Box,
  Card,
  CardHeader,
  Heading,
  Stack,
  CardBody,
  Text,
} from "@chakra-ui/react";

import { MdCheckCircle } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { Menu } from "../SideMenu/Menu";

export default function SobreNosotros() {
  return (
    <>
      <div>
        <Menu />
      </div>

      <Card
        margin={"2px"}
        padding="5px"
        w={"80%"}
        h={"80%"}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <CardHeader>
          <Heading size="md" textAlign={"center"}>
            Sobre Nosotros
          </Heading>
        </CardHeader>

        <CardBody>
          <Heading as="h4" size="md">
            Mi lista de Tarea
          </Heading>
          <hr />
          <p>
            Mi Lista de tarea es un sistema que pretente ayudarte en procesos
            rutinarios los cual deseas agendar para recordar en el futuro.
            <br />
            Es un sistema que pretende ser interactivo con el usuario para asi
            facilitar la experiencia de el usuario con una bonita interfaz.{" "}
          </p>
          <br />
          <List spacing={3}>
            <p style={{ color: "black" }}>Funciones que puedes encontrar</p>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="black" />
              Crear Tareas sin limites
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="black" />
              Buscar Tareas que hayas realizado
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="black" />
              Eliminar tareas
            </ListItem>

            <ListItem>
              <ListIcon as={MdCheckCircle} color="black" />Y más Actualizaciones
              en el Furuto
            </ListItem>
            <ListItem>
              <p> Herramientas de Desarrollo</p>
              <ul>
                <li>Lenguaje : Javascript y React</li>
                <li> Libreria : sweetalert2 </li>
                <li>Icon :Reac Icon</li>
              </ul>
            </ListItem>
          </List>

          <br />
          <hr />
          <div>
            <p>
              Desarrollador :<span> Liseth Moreno</span>
            </p>

            <p>
              <a href="https://github.com/LisethMoreno1">
                <AiFillGithub />
                Github
              </a>
            </p>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
