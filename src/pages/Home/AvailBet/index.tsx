import React, { useState } from "react";
import { Modal, Box } from "@material-ui/core";

import { MainText } from "../../../components";
import {
  ContainerBet,
  InfoBet,
  MatchContainer,
  MatchInfo,
  ShieldImage,
  UserContainer,
} from "./styles";

interface AvailBetProps {
  handleClickBet: () => void;
}

export const AvailBet = ({ handleClickBet }: AvailBetProps) => {
  return (
    <ContainerBet onClick={handleClickBet}>
      <InfoBet>
        <UserContainer>
          <MainText type="Bold" style={{ fontSize: "22px" }}>
            Nome do Usuario
          </MainText>
          <MainText type="Bold" style={{ fontSize: "20px", color: "#C7C7C7" }}>
            ●
          </MainText>
          <MainText type="Bold" style={{ fontSize: "20px", color: "#C7C7C7" }}>
            Botafogo vence
          </MainText>
        </UserContainer>
        <MainText type="Medium" style={{ fontSize: "18px", color: "#C7C7C7" }}>
          Botafogo x Coritiba
        </MainText>
        <MainText type="Medium" style={{ fontSize: "18px", color: "#C7C7C7" }}>
          Valor R$ 50,00
        </MainText>
        <MainText type="Medium" style={{ fontSize: "18px", color: "#C7C7C7" }}>
          ODD 2.0
        </MainText>
      </InfoBet>
      <MatchInfo>
        <MatchContainer>
          <ShieldImage
            src={require("../../../assets/images/Botafogo.png")}
            alt="Logo"
          />
          <MainText type="Bold" style={{ fontSize: "22px" }}>
            X
          </MainText>
          <ShieldImage
            src={require("../../../assets/images/Coritiba.png")}
            alt="Logo"
          />
        </MatchContainer>
        <MainText type="Medium" style={{ fontSize: "15px", color: "#C7C7C7" }}>
          01/01/2023 - 16:00
        </MainText>
      </MatchInfo>
    </ContainerBet>
  );
};
