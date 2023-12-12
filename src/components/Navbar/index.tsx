import React from "react";
import {
  ExpandableInfosStyled,
  LogoStyled,
  NavbarProfile,
  NavbarStyled,
  PerfilStyled,
} from "./styles";
import { CreateBetButton } from "../../pages/Home/styles";
import { MainText } from "../MainText";
import { useNavigate } from "react-router-dom";
import { CONSTANTS } from "../../constants";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NavbarStyled>
      <ExpandableInfosStyled onClick={() => navigate(CONSTANTS.ROUTES.HOME)}>
        <LogoStyled src={require("../../assets/images/logo.png")} alt="Logo" />
      </ExpandableInfosStyled>
      <NavbarProfile>
        <CreateBetButton onClick={() => navigate(CONSTANTS.ROUTES.CREATE_BET)}>
          <MainText type="Medium" align="center">
            Criar Aposta
          </MainText>
        </CreateBetButton>
        <PerfilStyled
          src={require("../../assets/images/perfil.png")}
          alt="Perfil"
        />
      </NavbarProfile>
    </NavbarStyled>
  );
};
