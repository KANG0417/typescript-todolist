import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  ${reset}
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    font-family: "TAEBAEK milkyway";
  }
  body {
    background-color: var(--background-color);
    height: auto;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  ul,
  ol,
  li {
    list-style: none;
  }
`;

export default GlobalStyle;
