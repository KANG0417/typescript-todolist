import { ChangeEvent, ChangeEventHandler, useState } from "react";

const useTodoInput = (): [string, ChangeEventHandler<HTMLInputElement>] => {
  const [value, setValue] = useState<string>("");

  const handler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target === null ? "" : e.target.value);
  };

  return [value, handler];
};

export default useTodoInput;
