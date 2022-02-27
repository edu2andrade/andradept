import { useState } from "react";
import { Container } from "./styles";

export const HamburguerButton = () => {
  const [open, setOpen] = useState("");

  function toggleClassname() {
    open === "" ? setOpen("open") : setOpen("");
  }

  return (
    <Container onClick={toggleClassname}>
      <div className={`hamburguer ${open}`}>
        <span className="hamburger__top-bun"></span>
        <span className="hamburger__bottom-bun"></span>
      </div>
    </Container>
  );
};
