import { createGlobalStyle } from "styled-components";

import BackgroundImage from "../images/background-desktop.png";

const GlobalStyle = createGlobalStyle`
  :root {
    --red: hsl(0, 100%, 74%);
    --green: hsl(154, 59%, 51%);
    --blue: hsl(248, 32%, 49%);
    --dark-blue: hsl(249, 10%, 26%);
    --grayish-blue: hsl(246, 25%, 77%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    width: 100%;
    min-height: 100vh;
    background-image: url(${BackgroundImage});
    background-color: var(--red);
  }
`;

export default GlobalStyle;
