import React from "react";
import { MainText } from "../../../components";
import {
  ContainerBet,
  InfoBet,
  MatchContainer,
  MatchInfo,
  ShieldImage,
  UserContainer,
} from "./styles";
import { OpenedBet } from "../../../types/Bet";

interface AvailBetProps {
  handleClickBet: () => void;
  currentBet: OpenedBet;
}

export const AvailBet = ({ handleClickBet, currentBet }: AvailBetProps) => {

  const getBetTeam = () => {
    return "";
  };


  return (
    <ContainerBet onClick={handleClickBet}>
      <InfoBet>
        <UserContainer>
          <MainText type="Bold" style={{ fontSize: "22px" }}>
            {currentBet.bet.betOwnerAddress}
          </MainText>
          <MainText type="Bold" style={{ fontSize: "20px", color: "#C7C7C7" }}>
            ●
          </MainText>
          <MainText type="Bold" style={{ fontSize: "20px", color: "#C7C7C7" }}>
            {
              getBetTeam()
            }
          </MainText>
        </UserContainer>
        <MainText type="Medium" style={{ fontSize: "18px", color: "#C7C7C7" }}>
          {currentBet.match.time_mandante.nome_popular} X {currentBet.match.time_visitante.nome_popular}
        </MainText>
        <MainText type="Medium" style={{ fontSize: "18px", color: "#C7C7C7" }}>
          Valor (FireCoins): {currentBet.bet.betValue}
        </MainText>
        <MainText type="Medium" style={{ fontSize: "18px", color: "#C7C7C7" }}>
          ODD 2.0
        </MainText>
      </InfoBet>
      <MatchInfo>
        <MatchContainer>
          <ShieldImage
            src={currentBet.match.time_mandante.escudo}
            alt="Logo"
          />
          <MainText type="Bold" style={{ fontSize: "22px" }}>
            X
          </MainText>
          <ShieldImage
            src={currentBet.match.time_visitante.escudo}
            alt="Logo"
          />
        </MatchContainer>
        <MainText type="Medium" style={{ fontSize: "15px", color: "#C7C7C7" }}>
          {currentBet.match.data_realizacao} - {currentBet.match.hora_realizacao}
        </MainText>
      </MatchInfo>
    </ContainerBet>
  );
};
