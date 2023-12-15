import useTodoFormInput from "hooks/useTodoFormInput";
import styled from "styled-components";
import Button from "./common/Button";
import { MouseEventHandler, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import { Todos } from "types";

type InputProps = {
  latestWorking: Todos[];
  latestDone: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
};

const Input = ({ latestWorking, latestDone, setTodos }: InputProps) => {
  const [todoTitle, onChangeTitleHandler] = useTodoFormInput();
  const [todoContent, onChangeContentHandler] = useTodoFormInput();

  const onClickAddButtonHandler: MouseEventHandler<HTMLButtonElement> = () => {
    const uuid = uuidv4();
    const nowDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
    const newTodo = {
      id: uuid,
      createAt: nowDate,
      title: todoTitle,
      content: todoContent,
      isDone: false,
    };
    alert("등록되었습니다");

    setTodos([...latestWorking, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...latestWorking, newTodo]));
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
  height: 500px;
  border: 1px solid black;
`;

const StyledLabel = styled.label``;

const StyledInput = styled.input``;
