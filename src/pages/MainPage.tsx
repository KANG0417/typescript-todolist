import Input from "components/Input";
import TodoList from "components/TodoList";
import { useState } from "react";
import styled from "styled-components";
import { Todos } from "types";

const MainPage = () => {
  const localStroageTodo = localStorage.getItem("todos");
  const initialTodos: Todos[] = localStroageTodo
    ? JSON.parse(localStroageTodo)
    : [];
  const [todos, setTodos] = useState<Todos[]>(initialTodos);
  const oldestWorking = todos.filter((todo) => !todo.isDone);
  const oldestDone = todos.filter((todo) => todo.isDone);
  const latestWorking = todos
    .filter((todo) => !todo.isDone)
    .sort(
      (a, b) => new Date(b.createAt).getTime() - new Date(a.createAt).getTime()
    );
  const latestDone = todos
    .filter((todo) => todo.isDone)
    .sort(
      (a, b) => new Date(b.createAt).getTime() - new Date(a.createAt).getTime()
    );

  return (
    <>
      <StyledMainWrapper>
        <Input
          latestWorking={latestWorking}
          latestDone={latestDone}
          setTodos={setTodos}
        />
        <TodoList
          oldestWorking={oldestWorking}
          oldestDone={oldestDone}
          latestWorking={latestWorking}
          latestDone={latestDone}
        />
      </StyledMainWrapper>
    </>
  );
};

export default MainPage;

const StyledMainWrapper = styled.main`
  border: 1px solid black;
  width: 500px;
  height: 500px;
`;
