import React from 'react'
import { Menu } from '../SideMenu/Menu';
import { Box, Button, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';

export const Login = () => {
  return (
    <Box>
      <Menu />
      <Box
        height={"779px"}
        display={"flex"}
        alignItems={"center"}
        width={"100%"}
        justifyContent="center"
      >
        <Box
          maxW="50%"
          height="50%"
          margin="30px"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          bgColor="#ffff"
        >
          <FormControl display={"flex"} flexDirection="column" padding="10px">
            <Heading textAlign="center">Ingresa</Heading>
            <FormLabel>Usuario</FormLabel>
            <Input
              type="text"
              placeholder="Usuario"
              variant="filled"
              htmlSize={40}
              width="auto"
            />
            <FormLabel>Contraseña</FormLabel>
            <Input
              type="text"
              placeholder="Contraseña"
              variant="filled"
              htmlSize={40}
              width="auto"
            />
            <Button colorScheme="whatsapp" margin={"10px"}>
              Ingresar
            </Button>
            <Button colorScheme="red" margin={"10px"}>
              {" "}
              Registrar
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}
