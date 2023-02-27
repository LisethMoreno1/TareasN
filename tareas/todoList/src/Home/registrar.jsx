import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/login.css";
import { Menu } from "../SideMenu/Menu";
import { usePostAñadirUsuarioMutation } from "../redux/Api";




const Registrate = () => {
  const navigate = useNavigate();
  const [crearUsuario, { data, error, isError, isSuccess }] =
    usePostAñadirUsuarioMutation();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;


    crearUsuario({
       username, password
    
  });

    setUsername("");
    setPassword("");
     navigate("/Login");
  };
  


  return (
    <>
      <Menu />
      <div className="Principal-container">
        <div className="principal">
          <div className="form-container">
            <form action="" onSubmit={onFormSubmit}>
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
              <button type="submit" className="button">
                Ingresar
              </button>
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
