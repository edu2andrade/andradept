import { Background, Container, Content } from "./styles";
import { Button } from "../Button";
import logo from "../../assets/logo_title.png";

export const Hero = () => {
  return (
    <Background>
      <Container>
        <Content>
          <nav>
            <ul>
              <li>
                <a href="#">Serviços</a>
              </li>
              <li>
                <a href="#">Resultados</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contactos</a>
              </li>
            </ul>
          </nav>
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