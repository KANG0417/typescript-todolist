import { ChangeEventHandler, useState } from "react";

const useTodoFormInput = (): [string, ChangeEventHandler<HTMLInputElement>] => {
  const [value, setValue] = useState<string>("");

  const handler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target === null ? "" : e.target.value);
  };

  return [value, handler];
};

export default useTodoFormInput;
