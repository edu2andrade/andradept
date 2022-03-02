import styled from "styled-components";

interface ContainerProps {
  open: boolean;
}

export const Container = styled.div<ContainerProps>`
  /* .hamburguer {
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
    bottom: 24px;
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
  } */

  // New Burguer

  /* position: absolute;
  top: 5%;
  left: 2rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 2rem;
  height: 1.5rem;
  background: transparent;
  border: 1px solid blue;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 1.5rem;
    height: 0.15rem;
    background: var(--background);
    border-radius: var(--border-radius);
    transition: all 0.2s linear;
    transform-origin: 3px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
