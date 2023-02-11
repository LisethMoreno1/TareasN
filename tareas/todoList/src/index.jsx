import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";
import { useTodo } from "./hooks/useTodo";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import "./style/index.css"


function Index() {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTodo();

  return (
    <Box height={"92%"}>
      <Heading textAlign="center">Lista de tareas</Heading>
      <Flex>
        <Box p="2">
          <Card margin={"6px"} w="100%">
            <CardBody>
              <Text>
                N° Tareas: <span>{todosCount}</span>
              </Text>
            </CardBody>
          </Card>
        </Box>
        <Spacer />

        <Box p="2">
          <Card margin={"6px"} w="100%">
            <CardBody>
              <Text>
                Pendientes: <span>{pendingTodosCount}</span>
              </Text>
            </CardBody>
          </Card>
        </Box>
      </Flex>
      <Box className="counter-todos"></Box>

      <Box className="add-todo">
        <Heading textAlign="center">Crea Tu primera Tarea</Heading>
        <TodoAdd handleNewTodo={handleNewTodo} />
      </Box>
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
