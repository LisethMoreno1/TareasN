import React from "react";
import "../style/menu.css";
import { Link } from "react-router-dom";
import { useAuthStore } from "../redux/zustand";

export const Menu = () => {

  const setProfileAuth = useAuthStore((state) => state.setProfile);
  const profileAuth = useAuthStore((state) => state.profile);

  return (
    <>
      {profileAuth == null ? (
        <header className="header">
          <a href="/" className="logo">
            ListaTarea
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>

          <ul className="menu">
            <li>
              <Link to="/login">Iniciar</Link>
            </li>
            <li>
              <Link to="/SobreNosotros">Sobre Nosotros</Link>
            </li>
            <li>
              <Link to="/">salir</Link>
            </li>
          </ul>
        </header>
      ) : (
        <header className="header">
          <a href="/" className="logo">
            ListaTarea
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>

          <ul className="menu">
            <li>
              <Link to="/login">Iniciar</Link>
            </li>
            <li>
              <Link to="/SobreNosotros">Sobre Nosotros</Link>
            </li>
            {/* <li>
              <Link to="/">salir</Link>
            </li> */}
          </ul>
        </header>
      )}
    </>
  );
};
