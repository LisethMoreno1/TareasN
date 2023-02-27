import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";
import { useTodo } from "./hooks/useTodo";
import { Box, Heading } from "@chakra-ui/react";
import "./style/index.css";
import { useAuthStore } from "./redux/zustand";

function Index() {
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTodo();

  
 const profileAuth = useAuthStore((state) => state.profile);


  return (
    <Box height={"92%"}>
      <Box className="add-todo">
        <Heading textAlign="center">Crea Tu primera Tarea {profileAuth.usuarios.username} </Heading>
        <TodoAdd handleNewTodo={handleNewTodo} />
      </Box>
      <br />
      <TodoList
        todos={todos}
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
    </Box>
  );
}

export default Index;
