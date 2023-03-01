import React, { useState } from "react";
import { useAuthStore } from "../redux/zustand";
import { loginRequest } from "../redux/axios";
import { useNavigate } from "react-router-dom";
import "../style/login.css";
import { Menu } from "../Page/Menu";
import { Box, Button } from "@chakra-ui/react";
import { usePostAñadirUsuarioQuery } from "../redux/Api";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();

  //ACCEDER A DATOS
  const [dataLogin, setDataLogin] = useState({
    username: "",
    password: "",
  });

  const setProfileAuth = useAuthStore((state) => state.setProfile);

  const onChange = (e) => {
    e.preventDefault();
    setDataLogin({ ...dataLogin, [e.target.name]: e.target.value });
  };

  const {
    data: base,
    isSuccess,
    error,
    isError,
  } = usePostAñadirUsuarioQuery(dataLogin);
  // if (isError) console.log(error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSuccess) {
      setProfileAuth(base);
      navigate("/About");
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
       title: base?.message,
     });
    
    } else {
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
       icon: "error",
       title: error?.data?.message,
     });
    }
    
  };



  return (
    <>
      <Menu />
      <div className="Principal-container">
        <div className="principal">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <h1 className="text"> Ingresa Con Tu Usuario </h1>
              <input
                placeholder="Usuario"
                type="username"
                name="username"
                onChange={onChange}
              />
              <input
                placeholder="Contraseña"
                type="password"
                name="password"
                onChange={onChange}
              />
              <Box
                className="Botones "
                display="flex"
                justifyContent={"center"}
                margin={"10px"}
                marginLeft={"10px"}
                gap={"10px"}
              >
                <Button
                  color={"white"}
                  bg={"#f5b003"}
                  _hover={{ bg: "#FFA900" }}
                  type="submit"
                  className="button"
                >
                  Ingresar
                </Button>
                <Button
                  color={"white"}
                  bg={"#f5b003"}
                  _hover={{ bg: "#FFA900" }}
                  type="submit"
                  className="button"
                >
                  <a href="/Registrate">Registrar</a>
                </Button>
              </Box>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>¡Bienvenidos!</h1>
                <p>
                  Para realizar tus tareas , Iniciando Seccion con tus Datos
                  Personales
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
