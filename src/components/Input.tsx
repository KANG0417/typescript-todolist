import useTodoInput from "hooks/useTodoInput";
import styled from "styled-components";
import Button from "./common/Button";
import { MouseEventHandler } from "react";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import { TTodo } from "types";

type InputProps = {
  todos: TTodo[];
  setTodos: React.Dispatch<React.SetStateAction<TTodo[]>>;
};

const Input = ({ todos, setTodos }: InputProps) => {
  const [todoTitle, onChangeTitleHandler] = useTodoInput();
  const [todoContent, onChangeContentHandler] = useTodoInput();

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

    setTodos([...todos, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  };

  return (
    <StyledForm>
      <StyledLabel>
        <StyledInput
          type="text"
          value={todoTitle}
          onChange={onChangeTitleHandler}
          placeholder="제목은 30자 이내로 입력해주세요"
          maxLength={30}
        />
      </StyledLabel>
      <StyledLabel>
        <StyledInput
          type="text"
          value={todoContent}
          onChange={onChangeContentHandler}
          placeholder="할일은 100자 이내로 입력해주세요"
          maxLength={100}
        />
      </StyledLabel>
      <Button onClick={onClickAddButtonHandler}>추가하기</Button>
    </StyledForm>
  );
};

export default Input;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  width: 800px;
  height: 80px;
  background-color: var(--white);
  border-radius: 10px;
`;

const StyledLabel = styled.label``;

const StyledInput = styled.input`
  border: none;
  border-bottom: 3px solid var(--background-color);
  width: 250px;
  height: 10px;
  padding: 10px;
  margin: 10px;
`;
