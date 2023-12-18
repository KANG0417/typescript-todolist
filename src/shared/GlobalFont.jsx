import { createGlobalStyle } from "styled-components";
import TAEBACKFONTTTF from "assets/font/TAEBAEK milkyway.ttf";
import TAEBACKFONTOTF from "assets/font/TAEBAEK milkyway.otf";
import TAEBACKFONTWOFF from "assets/font/TAEBAEKmilkyway.woff";
import TAEBACKFONTWOFF2 from "assets/font/TAEBAEKmilkyway.woff2";

const styled = { createGlobalStyle };

const GlobalFont = styled.createGlobalStyle`
  @font-face {
    font-family: "TAEBAEK milkyway";
    src: url(${TAEBACKFONTWOFF2}) format("woff2"),
      url(${TAEBACKFONTWOFF}) format("woff"),
      url(${TAEBACKFONTTTF}) format("ttf"), url(${TAEBACKFONTOTF}) format("otf");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`;

export default GlobalFont;
