import { HamburguerButton } from "../HamburguerButton";

// Criar HamburguerMenu (HamburguerButton será usado dentro deste componente)
// Renderizar condicionalmente o HamburguerMenu (Mobile) ou o Menu (Desktop)

export const Nav = () => {
  return (
    <nav>
      <HamburguerButton />

      {/* <ul>
        <li>
          <a href="#services">Serviços</a>
        </li>
        <li>
          <a href="#clients">Resultados</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contactos</a>
        </li>
      </ul> */}
    </nav>
  );
};
