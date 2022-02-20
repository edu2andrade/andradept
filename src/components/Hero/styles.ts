import styled from "styled-components";
import bgImageDesktop from "../../assets/bg_desktop.jpg";
import bgImageMobile from "../../assets/bg_mobile.jpg";

export const Background = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;

  background: url(${bgImageMobile}) center no-repeat;
  background-size: cover;

  @media only screen and (min-width: 600px) {
    background: url(${bgImageDesktop}) center no-repeat;
    background-size: cover;
  }
`;

export const Container = styled.div`
  border: 1px solid yellow;
  display: flex;
  justify-content: flex-end;

  margin: 0 auto;

  width: 90%;
  padding: 1rem 0;

  @media only screen and (min-width: 768px) {
    width: 90%;
    padding: 1.25rem 0;
  }
  @media only screen and (min-width: 992px) {
    width: 85%;
    padding: 1.5rem 0;
  }
  @media only screen and (min-width: 1200px) {
    width: 80%;
    padding: 2rem 0;
  }
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
    width: 70%;
    margin-top: 10rem;
  }

  .subtitle {
    border: 1px solid green;
    margin-top: 2rem;
    text-align: right;
    width: 50%;
  }

  @media only screen and (min-width: 768px) {
    img {
      width: 75%;
    }
    .subtitle {
      width: 60%;
    }
  }

  @media only screen and (min-width: 992px) {
    img {
      width: 80%;
    }
    .subtitle {
      width: 70%;
    }
  }

  @media only screen and (min-width: 1200px) {
    img {
      width: 85%;
    }
    .subtitle {
      width: 70%;
    }
  }
`;
