import { TTodo } from "types";
import Todo from "./Todo";
import styled from "styled-components";

type TodoListProps = {
  todos: TTodo[];
  setTodos: React.Dispatch<React.SetStateAction<TTodo[]>>;
  isActive: boolean;
};

function TodoList({ todos, isActive, setTodos }: TodoListProps) {
  const latestTodo = todos.sort(
    (a, b) => new Date(a.createAt).getTime() - new Date(b.createAt).getTime()
  );
  console.log(latestTodo);

  return (
    <StyledTodoListWapper>
      <StyledTodoListTitle>
        {isActive ? "해야할 일" : "완료된 일"}
      </StyledTodoListTitle>

      <StyledTodoListContainer>
        {latestTodo
          .filter((todo) => todo.isDone === !isActive)
          .map((todo) => {
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
      </StyledTodoListContainer>
    </StyledTodoListWapper>
  );
}

export default TodoList;

const StyledTodoListWapper = styled.div``;

const StyledTodoListTitle = styled.h2`
  font-size: 2rem;
  margin: 10px;
  line-height: 2rem;
  font-weight: 600;
  color: var(--font-color);
`;

const StyledTodoListContainer = styled.div`
  display: flex;
  min-width: 800px;
  overflow: auto;

  &::-webkit-scrollbar {
    height: 8px;
    background-color: var(--black);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--black);
  }
  &::-webkit-scrollbar-track {
    background-color: var(--white);
  }
`;
