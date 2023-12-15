import React, { MouseEventHandler } from "react";
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
      <div key={todo.id}>
        <p>{todo.title}</p>
        <p>{todo.createAt}</p>
        <p>{todo.content}</p>
        <Button onClick={() => onClickSwitchButtonHandler(todo.id)}>
          {isActive ? "완료" : "취소"}
        </Button>
        <Button onClick={() => onClickRemoveButtonHandler(todo.id)}>
          삭제
        </Button>
      </div>
    </TodoContainer>
  );
};

export default Todo;

const TodoContainer = styled.div``;
