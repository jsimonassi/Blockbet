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
import { useSessionContext } from "../../../contexts/Session";

interface AvailBetProps {
  handleClickBet: () => void;
  currentBet: OpenedBet;
}

export const AvailBetResult = ({ handleClickBet, currentBet }: AvailBetProps) => {

  const { currentSession } = useSessionContext();

  const getBetTeam = () => {
    if(currentBet.bet.betOwnerAddress === currentSession?.address){
      if(currentBet.bet.betOwnerType === "home"){
        return currentBet.match.time_mandante.nome_popular + " vence";
      }
      if(currentBet.bet.betOwnerType === "away"){
        return currentBet.match.time_visitante.nome_popular + " vence";
      }
      return "Empate";
    }else {
      if(currentBet.bet.betCoverType === "home"){
        return currentBet.match.time_mandante.nome_popular + " vence";
      }
      if(currentBet.bet.betCoverType === "away"){
        return currentBet.match.time_visitante.nome_popular + " vence";
      }
      return "Empate";
    }
  };

  return (
    <ContainerBet onClick={handleClickBet} waiting={currentBet.bet?.betCoverAddress !== undefined}>
      <InfoBet>
        <UserContainer>
          <MainText type="Bold" style={{ fontSize: "22px" }}>
            {currentBet.bet.uuid}
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
        <MainText type="Medium" style={{ fontSize: "18px", color: "#C7C7C7" }}>
          Status: {currentBet.bet?.betCoverAddress ? "Aguardando resultado" : "Esperando cobertura"}
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
