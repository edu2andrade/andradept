import styled from "styled-components";
import bgImageDesktop from "../../assets/bg_desktop.jpg";
import bgImageMobile from "../../assets/bg_mobile.jpg";

export const Background = styled.header`
  width: 100vw;
  height: 100vh;

  display: flex;

  background: url(${bgImageMobile}) no-repeat;

  @media only screen and (min-width: 600px) {
    background: url(${bgImageDesktop}) center no-repeat;
  }
`;

export const Container = styled.div`
  border: 1px solid yellow;

  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  width: 80%;
  padding: 2rem 0;
  margin: 0 auto;

  display: flex;
  justify-content: flex-end;
`;

export const Content = styled.div`
  border: 1px solid red;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  color: var(--background);

  ul {
    display: flex;

    li,
    a {
      margin-right: 1rem;
      color: var(--background);

      transition: 200ms;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        color: var(--light-green);
      }
    }
  }

  img {
    margin-top: 10rem;
  }

  .subtitle {
    border: 1px solid green;
    margin-top: 2rem;
    text-align: right;
    width: 70%;
  }
`;
