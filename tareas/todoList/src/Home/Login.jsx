import React, { useState } from "react";
import { useAuthStore } from "../redux/zustand";
import { loginRequest } from "../redux/axios";
import { useNavigate } from "react-router-dom";
import "../style/login.css";
import { Menu } from "../SideMenu/Menu";
const Login = () => {
  const navigate = useNavigate();

  const [dataLogin, setDataLogin] = useState({
    username: "",
    password: "",
  });

  const setProfileAuth = useAuthStore((state) => state.setProfile);
  const onChange = (e) => {
    e.preventDefault();
    setDataLogin({ ...dataLogin, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await loginRequest(dataLogin);
    console.log(data);
    setProfileAuth(data?.data);
    navigate("/About");
  };

  return (
    <>
      <Menu />
      <div className="Principal-container">
        <div className="principal">
          <div className="form-container">
            <form action="" onSubmit={handleSubmit}>
              <h1 className="text"> Ingresa Con Tu Usuario</h1>
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
              <button type="submit" className="button">
                Ingresar
              </button>
              <button type="submit" className="button">
                <a href="/Registrate">Registrar</a>
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

export default Login;
