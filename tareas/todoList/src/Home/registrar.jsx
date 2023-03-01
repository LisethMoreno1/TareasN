import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/login.css";
import { Button } from "@chakra-ui/react";
import { Menu } from "../Page/Menu";
import { usePostAñadirUsuarioNuevoMutation } from "../redux/Api";
import Swal from "sweetalert2";




const Registrate = () => {
  const navigate = useNavigate();
  const [crearUsuario, { data, error, isError, isSuccess }] =
    usePostAñadirUsuarioNuevoMutation();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;


    crearUsuario({
       username, password
    
  });
if(isSuccess){

  setUsername("");
  setPassword("");
  navigate("/Login");
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
       title: "Usuario Creado Con Exito",
     });
    
}else {
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
       title: "Error De Registro, Intentar de nuevo",
     });
    }
  };
  


  return (
    <>
      <Menu />
      <div className="Principal-container">
        <div className="principal">
          <div className="form-container">
            <form  onSubmit={onFormSubmit}>
              <h1 className="text"> Registrate en nuestro Sitio</h1>
              <input
                placeholder="Usuario"
                type="username"
                name="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <input
                placeholder="Contraseña"
                type="password"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Button
                color={"white"}
                bg={"#f5b003"}
                margin={"5px"}
                _hover={{ bg: "#FFA900" }}
                type="submit"
                className="button"
              >
                Ingresar
              </Button>
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

export default Registrate;
