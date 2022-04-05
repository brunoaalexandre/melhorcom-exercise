import { Container } from "./styles";

import logoImg from "../../assets/logo.png";

export function Header() {
  return (
    <Container>
      <img src={logoImg} alt="Melhor Celular" />
    </Container>
  );
}
