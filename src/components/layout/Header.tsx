import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledTitle>오늘의 할일</StyledTitle>
    </StyledHeaderWrapper>
  );
};

export default Header;

const StyledHeaderWrapper = styled.header`
  width: 90%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  border-radius: 10px;
  font-size: 3rem;
  font-weight: 600;
  color: var(--font-color);
`;

const StyledTitle = styled.h1``;
