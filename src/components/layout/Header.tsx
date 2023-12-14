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
  background-color: yellow;
`;

const StyledTitle = styled.h1``;
