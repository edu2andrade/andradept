import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #EDF2F4;

    --darkest-green: #0A2C40;
    --dark-green: #115D6D;
    --light-green: #24EFF2;

    --text-body: #373E40;

    --border-radius: 0.25rem;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // Desktop font-size: 16px
  html{
    @media (max-width: 1080px) {
        font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
        font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--text-body);
    overflow-x: hidden;
  }

  body, input, textarea, button, a {
    font-family: 'Prompt', sans-serif;
    font-weight: 200;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  li,
    a {
      text-decoration: none;
      list-style-type: none;
      cursor: pointer;
    }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: .6;
    cursor: not-allowed;
  }
`;
