import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooterWrapper>
      <StyledFooterTitle>
        ⓒ 2023 오늘의 할일 https://github.com/KANG0417/typescript-todolist.git
      </StyledFooterTitle>
    </StyledFooterWrapper>
  );
};

export default Footer;

const StyledFooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 63.5px;
  background-color: var(--footer-color);
  font-weight: 600;
  font-size: 1.3rem;
`;

const StyledFooterTitle = styled.h2``;
