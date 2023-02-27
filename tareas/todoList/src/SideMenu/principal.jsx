
import React from "react";
import { Menu } from "./Menu";
import "../style/Principal.css";
import header from "../img/header.png";

export const Principal = () => {
  return (
    <>
      <Menu />
      <section className="section-a">
        <div className="section-b">
          <div className="section-title">
            <div className="section-titulos-h1-h4">
              <h1 className="h1-estilo">LISTA </h1>
              <h4 className="h4-estilo">DE</h4>
            </div>
            <h1 className="h1-estilo-2">TAREAS</h1>
            <div>
              <p className="p-estilo">
                Nuestro aplicativo a llegado para facilitar tu vida no te
                <br />
                quedes si a notar tus tareas de la una forma  practica y
                sencilla.
              </p>
            </div>
          </div>
        </div>
        <div className="principal-container">
          <div className="Imagen-contenedor">
            <img src={header} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};
