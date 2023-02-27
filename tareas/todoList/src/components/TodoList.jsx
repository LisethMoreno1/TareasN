import React from 'react';
import { TodoItem } from './TodoItem';
import { useGetTareaQuery } from '../redux/Api';
import { useAuthStore } from '../redux/zustand';
import "../style/botonflotante.css";
import { ImExit } from "react-icons/im";
import { Link } from 'react-router-dom';



export const TodoList = ({  }) => {
  const profileAuth = useAuthStore((state) => state.profile);
 	const handleCompleteTodo = (id) => {
    const action = {
      type: "Complete Todo",
      payload: id,
    };

    dispatch(action);
  };


  const { data, isError, isSuccess, error } = useGetTareaQuery(profileAuth.token);
  // if (isSuccess) console.log(data);
  return (
    <>
      <ul
        style={{
          height: "50%",
          overflowY: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 280px)",
          maxWidth: "100%",
          gap: "40px",
          justifyContent: "center",
          alignItems: "center",
          listStyle: "none",
        }}
      >
        {data?.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </ul>
      <div className="contenedor-flotante">
        <button className="botonF1">
          <a className="span" href="/"><ImExit/></a>
          
        </button>
      </div>
    </>
  );
};
