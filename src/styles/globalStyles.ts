import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }

  body {
    font-weight: 600; 
    background-color: #fefefe;
    color: #222;

    display: flex;
    justify-content: center;
    min-height: 100vh;

    #root{
      width: 100%

    }
  }
  button {
    cursor: pointer;
  }
  h1{
    font-size: 32px;
    font-weight: 700;
  }
  h2{
    font-size: 20px;
    font-weight: 500;
  }
`;

export default GlobalStyle;
