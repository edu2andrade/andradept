import styled from "styled-components";

export const Background = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;

  background: var(--background);
`;

export const Container = styled.div`
  border: 1px solid yellow;
  margin: 0 auto;

  display: flex;
  justify-content: center;

  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    width: 80%;
    padding: 2rem 0;
  }
`;
