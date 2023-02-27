import React from "react";
import { Heading } from "@chakra-ui/react";
import { Menu } from "../SideMenu/Menu";
import "../style/sobrenosotros.css";

export default function SobreNosotros() {
  return (
    <>
      <div>
        <Menu />
      </div>

      <div className="container-timeline">
        <div className="timeline">
          <ul>
            <li>
              <div className="timeline-content">
                <h1>Sobre Nosotros</h1>
                <p className="titulos-1">
                  Mi Lista de tarea es un sistema que pretente ayudarte en
                  procesos rutinarios los cual deseas agendar para recordar en
                  el futuro. Es un sistema que pretende ser interactivo con el
                  usuario para asi facilitar la experiencia de el usuario con
                  una bonita interfaz.
                </p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h1>Te ofrecemos</h1>
                <p className="titulos-1">
                  <> Crear tus tareas, </>
                  <> Poder editar tus tareas,</>
                  <> Eliminar tus tareas, </>
                  <> Marcar tus tareas completadas </>
                </p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h1>Herramientas</h1>
                <p className="titulos-1">
                  <>Lenguaje : Javascript y React ,</>
                  <>Libreria : sweetalert2, </>
                  <>Icon: Reac Icon ,</>
                  <>Chakra UI</>
                </p>
              </div>
            </li>

            <li>
              <div className="timeline-content">
                <h1>Desarrolladora</h1>
                <p className="titulos-1">Liseth Moreno</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
