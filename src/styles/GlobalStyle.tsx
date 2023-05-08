import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    font-family: "pretendard", "noto-sans-cjk-kr", sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyle;
