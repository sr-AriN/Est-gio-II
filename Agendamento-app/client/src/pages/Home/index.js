import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import Logo from "../../components/images/Logo.png";
import ProMin from "../../components/images/ProMin.png"

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Header>
        <C.Logo src={Logo} alt="Logo da Fainor"/>
        <C.Profile>
          <C.ProMin src={ProMin} alt="Placehouder da foto de profile"/>
          <div>
            <C.Title>Nome do prodessor</C.Title>
            <C.subTitle>Professor(a)</C.subTitle>
          </div>
        </C.Profile>
      </C.Header>
      <C.Body>
        
        <C.Title>Home</C.Title>
        <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
          Sair
        </Button>
      </C.Body>
      <C.Footer>

      </C.Footer>
    </C.Container>
  );
};

export default Home;