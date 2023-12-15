import { Todos } from "types";
import Todo from "./Todo";

type TodoListProps = {
  latestWorking: Todos[];
  latestDone: Todos[];
  oldestWorking: Todos[];
  oldestDone: Todos[];
};

function TodoList({
  oldestWorking,
  oldestDone,
  latestWorking,
  latestDone,
}: TodoListProps) {
  return <Todo />;
}

export default TodoList;
