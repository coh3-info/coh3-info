import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "pretendard", sans-serif;
    font-family: "noto-sans-cjk-kr", sans-serif;
  }

  button {
    cursor: pointer;
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyle;
