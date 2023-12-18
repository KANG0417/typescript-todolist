import { MouseEventHandler, PropsWithChildren } from "react";
import styled from "styled-components";

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  children,
  onClick: onClickHandler,
}: PropsWithChildren<ButtonProps>) => {
  return <CommonButton onClick={onClickHandler}>{children}</CommonButton>;
};

export default Button;

const CommonButton = styled.button`
  border-color: var(--background-color);
  border-radius: 10px;
  margin: 10px;
  color: var(--footer-color);
  box-shadow: 0 0 40px 40px var(--background-color) inset,
    0 0 0 0 var(--background-color);
  transition: all 150ms ease-in-out;
  font-weight: 800;
  font-size: 1.5rem;
  width: 80px;
  height: 30px;

  &:hover {
    box-shadow: 0 0 10px 0 var(--background-color) inset,
      0 0 10px 4px var(--background-color);
  }
`;
