import Input from "components/Input";
import TodoList from "components/TodoList";
import { useState } from "react";
import styled from "styled-components";
import { TTodo } from "types";

const MainPage = () => {
  const localStroageTodo = localStorage.getItem("todos");
  const initialTodos: TTodo[] = localStroageTodo
    ? JSON.parse(localStroageTodo)
    : [];
  const [todos, setTodos] = useState<TTodo[]>(initialTodos);

  return (
    <>
      <StyledMainWrapper>
        <Input todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} isActive={true} />
        <TodoList todos={todos} setTodos={setTodos} isActive={false} />
      </StyledMainWrapper>
    </>
  );
};

export default MainPage;

const StyledMainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-width: 800px;
  max-width: 1200px;
  height: 600px;
  margin: 20px auto 20px auto;
`;
