import React from "react";
import styled from "styled-components";
import { TTodo } from "types";
import Button from "./common/Button";

type TodoProps = {
  todos: TTodo[];
  setTodos: React.Dispatch<React.SetStateAction<TTodo[]>>;
  isActive: boolean;
  todo: TTodo;
};

const Todo = ({ todos, todo, isActive, setTodos }: TodoProps) => {
  const onClickRemoveButtonHandler = (id: string) => {
    const isDelCheck = window.confirm("정말 삭제하시겠습니까?");
    const removeTodos = todos.filter((todo) => todo.id !== id);

    if (isDelCheck) {
      localStorage.setItem("todos", JSON.stringify(removeTodos));
      setTodos(removeTodos);

      alert("삭제되었습니다!");
    }
    return;
  };

  const onClickSwitchButtonHandler = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });

    localStorage.setItem("todos", JSON.stringify([...updatedTodos]));
    setTodos(updatedTodos);
  };

  return (
    <TodoContainer>
      <ul key={todo.id}>
        <li className="todoTitle">{todo.title}</li>
        <li>{todo.createAt}</li>
        <li className="todoContent">{todo.content}</li>
        <Button onClick={() => onClickSwitchButtonHandler(todo.id)}>
          {isActive ? "완료" : "취소"}
        </Button>
        <Button onClick={() => onClickRemoveButtonHandler(todo.id)}>
          삭제
        </Button>
      </ul>
    </TodoContainer>
  );
};

export default Todo;

const TodoContainer = styled.div`
  display: flex;
  justify-content: left;
  max-width: 250px;
  height: 150px;
  margin: 10px;
  padding: 10px;
  line-height: 2rem;
  background-color: var(--white);
  border-radius: 10px;

  li {
    line-height: 2.5rem;
  }

  .todoTitle {
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--font-color);
  }

  .todoContent {
    font-size: 2rem;
    min-width: 200px;
    min-height: 60px;
  }
`;
