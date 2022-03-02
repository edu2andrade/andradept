import { SetStateAction } from "react";
import { Container } from "./styles";

// Create Burguer
// https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
// When the state changes to "open" (true) render the Menu on Burguer

interface BurguerProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

export const Burguer = ({ open, setOpen }: BurguerProps) => {
  return (
    <Container open={open} onClick={() => setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
};
