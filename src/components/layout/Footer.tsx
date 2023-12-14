import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooterWrapper>
      <StyledFooterTitle>ⓒ2023 오늘의 할일</StyledFooterTitle>
    </StyledFooterWrapper>
  );
};

export default Footer;

const StyledFooterWrapper = styled.footer`
  width: 100%;
  height: 200px;
`;

const StyledFooterTitle = styled.h2``;
