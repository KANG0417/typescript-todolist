import useTodoFormInput from "hooks/useTodoFormInput";
import styled from "styled-components";

const Input = () => {
  const [todoTitle, onChangeTitleHandler] = useTodoFormInput();
  const [todoContent, onChangeContentHandler] = useTodoFormInput();

  return (
    <StyledForm>
      <StyledLabel>
        <StyledInput
          type="text"
          value={todoTitle}
          onChange={onChangeTitleHandler}
          placeholder="제목"
        />
        왜안먹지
      </StyledLabel>
      <StyledLabel>
        <StyledInput
          type="text"
          value={todoContent}
          onChange={onChangeContentHandler}
          placeholder="할일"
        />
      </StyledLabel>
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
