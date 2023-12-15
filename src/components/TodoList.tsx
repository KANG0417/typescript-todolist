import { TTodo } from "types";
import Todo from "./Todo";
import styled from "styled-components";
import { useState } from "react";

type TodoListProps = {
  todos: TTodo[];
  setTodos: React.Dispatch<React.SetStateAction<TTodo[]>>;
  isActive: boolean;
};

function TodoList({ todos, isActive, setTodos }: TodoListProps) {
  const latestTodo = todos.sort(
    (a, b) => new Date(b.createAt).getTime() - new Date(a.createAt).getTime()
  );
  console.log(todos);
  console.log(isActive);
  console.log("최신순", latestTodo);

  return (
    <StyledTodoListWapper>
      <StyledTodoListTitle>
        {isActive ? "해야할 일" : "완료된 일"}
      </StyledTodoListTitle>

      {latestTodo
        .filter((todo) => todo.isDone === !isActive)
        .map((todo, index) => {
          return (
            <Todo
              key={todo.id}
              setTodos={setTodos}
              todos={todos}
              todo={todo}
              isActive={isActive}
            />
          );
        })}
    </StyledTodoListWapper>
  );
}

export default TodoList;

const StyledTodoListWapper = styled.div``;

const StyledTodoListTitle = styled.h2`
  font-size: 2rem;
`;
