import React from 'react';
import { TodoItem } from './TodoItem';
import { useGetTareaQuery } from '../redux/Api';

export const TodoList = ({
}) => {
	 const { data, isError, isSuccess, error } = useGetTareaQuery();
   if (isSuccess) console.log(data);
	return (
    <ul style={{height: '50%', overflowY: 'auto', display: 'grid', gridTemplateColumns:"repeat(auto-fill, 280px)",maxWidth:"100%", gap:"40px",
    justifyContent:"center", alignItems:"center", listStyle:"none"}}>
      {data?.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
        />
      ))}
    </ul>
  );
};
