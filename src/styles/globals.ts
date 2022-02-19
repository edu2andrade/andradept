import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #EDF2F4;

    --darkest-green: #0A2C40;
    --dark-green: #115D6D;
    --light-green: #24EFF2;

    --text-title: #373E40;
    --text-body: #77878B;
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
  }

  body, input, textarea, button {
    font-family: 'Prompt', sans-serif;
    font-weight: 200;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: .6;
    cursor: not-allowed;
  }
`