import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalColor = styled.createGlobalStyle`
  :root {
    --white: #fff;
    --black: #000;
    --background-color: #e0f2fb;
    --footer-color: #aaaaaa;
    --font-color: #ff3e00;
  }
`;

export default GlobalColor;
