import useTodoFormInput from "hooks/useTodoFormInput";
import styled from "styled-components";
import Button from "./common/Button";
import { MouseEventHandler, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import { TTodo } from "types";

type InputProps = {
  todos: TTodo[];
  setTodos: React.Dispatch<React.SetStateAction<TTodo[]>>;
};

const Input = ({ todos, setTodos }: InputProps) => {
  const [todoTitle, onChangeTitleHandler] = useTodoFormInput();
  const [todoContent, onChangeContentHandler] = useTodoFormInput();

  const oldestTodo = todos.filter((todo) => !todo.isDone);
  const latestTodo = todos.sort(
    (a, b) => new Date(b.createAt).getTime() - new Date(a.createAt).getTime()
  );

  const onClickAddButtonHandler: MouseEventHandler<HTMLButtonElement> = () => {
    const uuid = uuidv4();
    const nowDate = dayjs().format("YY년 MM월 DD일 HH:mm:ss");
    const newTodo = {
      id: uuid,
      createAt: nowDate,
      title: todoTitle,
      content: todoContent,
      isDone: false,
    };

    if (todoTitle.trim() === "") {
      alert("제목을 입력해주세요!");
      return false;
    }

    if (todoContent.trim() === "") {
      alert("내용을 입력해주세요!");
      return false;
    }

    alert("등록되었습니다");

    setTodos([...latestTodo, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...latestTodo, newTodo]));
  };

  return (
    <StyledForm>
      <StyledLabel>
        <StyledInput
          type="text"
          value={todoTitle}
          onChange={onChangeTitleHandler}
          placeholder="제목"
        />
      </StyledLabel>
      <StyledLabel>
        <StyledInput
          type="text"
          value={todoContent}
          onChange={onChangeContentHandler}
          placeholder="할일"
        />
      </StyledLabel>
      <Button onClick={onClickAddButtonHandler}>추가하기</Button>
    </StyledForm>
  );
};

export default Input;

const StyledForm = styled.form`
  width: 500px;
  height: 80px;
  border: 1px solid black;
`;

const StyledLabel = styled.label``;

const StyledInput = styled.input``;
