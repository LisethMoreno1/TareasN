import React from "react";
import "../style/menu.css";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <header className="header">
      <a href="" className="logo">
        ListaTarea
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>

      <ul className="menu">
        <li>
          <Link to="/">Iniciar</Link>
        </li>
        <li>
          <Link to="/SobreNosotros">Sobre Nosotros</Link>
        </li>
        <li>
          <Link to="">Contact</Link>
        </li>
      </ul>
    </header>
  );
};
