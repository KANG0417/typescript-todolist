import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledWrapper>
      <StyledTitle>To Do List</StyledTitle>
    </StyledWrapper>
  );
};

export default Header;

const StyledWrapper = styled.header``;

const StyledTitle = styled.h1``;
