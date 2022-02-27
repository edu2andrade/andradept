import { Nav } from "../Nav";
import { Button } from "../Button";

import logo from "../../assets/logo_title.png";

import { Background, Container, Content } from "./styles";

export const Hero = () => {
  return (
    <Background>
      <Container>
        <Content>
          <Nav />
          <img src={logo} alt="logotipo" />
          <small className="subtitle">
            Treinos personalizados para atingir seus resultados com segurança
            sem desperdiçar horas no ginásio
          </small>
          <Button text={"CONTACTA-ME"} />
        </Content>
      </Container>
    </Background>
  );
};
