/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import { MainText } from "../../components";
import { AvailBet } from "./AvailBet";
import {
  AvailBetText,
  BrasileiraoText,
  CreateBetButton,
  ExpandableInfosStyled,
  LogoStyled,
  Navbar,
  NavbarProfile,
  OverlayBackgroundStyled,
  OverlayBrasileiro,
  PageContainer,
  TextOverlayBrasileiro,
  TitleOverlayBrasileiro,
  TrophyContainer,
  TrophyStyled,
} from "./styles";

export const Home = () => {
  return (
    <OverlayBackgroundStyled>
      <Navbar>
        <ExpandableInfosStyled>
          <LogoStyled
            src={require("../../assets/images/logo.png")}
            alt="Logo"
          />
        </ExpandableInfosStyled>
        <NavbarProfile>
          <CreateBetButton>CRIAR APOSTA</CreateBetButton>
          PERFIL
        </NavbarProfile>
      </Navbar>
      <PageContainer>
        <OverlayBrasileiro>
          <TextOverlayBrasileiro>
            <TitleOverlayBrasileiro>Campeonato</TitleOverlayBrasileiro>
            <BrasileiraoText>Brasileiro</BrasileiraoText>
          </TextOverlayBrasileiro>
          <TrophyContainer>
            <TrophyStyled
              src={require("../../assets/images/Trophy.png")}
              alt="Logo"
            />
          </TrophyContainer>
        </OverlayBrasileiro>
        <div style={{ height: "5vh" }}></div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "4vh",
          }}
        >
          <MainText type="Bold" style={{ fontSize: "22px" }}>
            Apostas disponíveis
          </MainText>
        </div>

        <AvailBet />
        <AvailBet />
        <AvailBet />
      </PageContainer>
    </OverlayBackgroundStyled>
  );
};
