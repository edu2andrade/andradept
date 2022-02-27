import styled from "styled-components";

export const Container = styled.div`
  .hamburguer {
    cursor: pointer;
    position: relative;
    width: 48px;
    height: 48px;
    transition: all 0.25s;

    :hover {
      filter: brightness(0.7);
    }
  }

  .hamburger__top-bun,
  .hamburger__bottom-bun {
    content: "";
    display: block;
    position: absolute;
    left: 15px;
    width: 18px;
    height: 1px;
    background: #fff;
    border-radius: 10px;
    transform: rotate(0);
    transition: all 0.25s;
  }

  .hamburger__top-bun {
    top: 23px;
    transform: translateY(-3px);
  }

  .hamburger__bottom-bun {
    bottom: 23px;
    transform: translateY(3px);
  }

  .open {
    transform: rotate(90deg);
  }

  .open .hamburger__top-bun {
    transform: rotate(45deg) translateY(0px);
  }

  .open .hamburger__bottom-bun {
    transform: rotate(-45deg) translateY(0px);
  }
`;
