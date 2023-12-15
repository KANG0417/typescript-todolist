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

const CommonButton = styled.button``;
