/* eslint-disable @typescript-eslint/no-var-requires */

import React, { useEffect, useRef, useState } from "react";
import {
  MainButton,
  MainText,
  Navbar,
  OverlayBackground,
  PageContainer,
} from "../../components";
import { AvailBet } from "./AvailBet";
import {
  BrasileiraoText,
  OverlayBrasileiro,
  TextOverlayBrasileiro,
  TitleOverlayBrasileiro,
  TrophyContainer,
  TrophyStyled,
} from "./styles";
import { BlockchainService } from "../../services/blockchain";
import { Bet, OpenedBet } from "../../types/Bet";
import { Api } from "../../services";
import { useSessionContext } from "../../contexts/Session";
import { CoverBetModal } from "./CoverBetModal";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import toast from "react-hot-toast";


export const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const currentTheme = useTheme();
  const navigate = useNavigate();
  const [availableBets, setAvailableBets] = useState<OpenedBet[]>([]);
  const selectedBetRef = useRef<OpenedBet | null>(null);

  const { currentSession } = useSessionContext();

  const handleClickBet = (bet: OpenedBet | null) => {

    if(bet && currentSession?.balance && bet?.bet.betValue > currentSession?.balance){
      toast.error("Saldo insuficiente");
      return;
    }

    setOpenModal((prev) => !prev);
    selectedBetRef.current = bet;
  };

  useEffect(() => {

    const runAsync = async () => {
      const betList: Bet[] = await BlockchainService.getAllBets();
      const filteredList: Bet[] = betList.filter((bet) => bet.betOwnerAddress !== currentSession?.address && !bet?.betCoverAddress);
      const openedBetList: OpenedBet[] = [];
      if (filteredList.length > 0) {
        filteredList.forEach(async (bet) => {
          const foundMatch = await Api.getMatchById(bet.matchId);
          if (foundMatch) {
            openedBetList.push({
              bet,
              match: foundMatch
            });
          }
        });
      }

      setAvailableBets(openedBetList);
    };

    runAsync();
  }, []);


  const getBetsContent = () => {

    if (availableBets.length === 0) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "4vh",
            flexDirection: "column",
            height: "200%",
          }}
        >
          <MainText type="Bold" style={{ fontSize: "22px" }}>
            Nenhuma aposta disponível
          </MainText>

          <MainText type="Light" style={{ fontSize: "18px", color: currentTheme.palette.textSecondary }}>
            Quando algum usuário criar uma aposta, ela ficará disponível para sua cobertura!
          </MainText>
          <MainButton
            type="Secondary"
            onClick={() => navigate(ROUTES.CREATE_BET)}
            text="Criar aposta"
            style={{ marginTop: "4vh", width: "50%", marginBottom: "2vh" }}
          />
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <hr style={{ width: "20%", opacity: 0.5 }} />
            <MainText type="Light" style={{ fontSize: "18px", marginLeft: "10px", marginRight: "10px", color: currentTheme.palette.textSecondary }}>
              ou
            </MainText>
            <hr style={{ width: "20%", opacity: 0.5 }} />
          </div>
          <div onClick={() => navigate(ROUTES.HISTORY)}>
            <MainText
              type="Light"
              style={{
                fontSize: "18px",
                marginTop: "1vh",
                color: currentTheme.palette.primaryColor,
                textDecoration: "underline",
                cursor: "pointer",
              }}>
              Ver minhas apostas
            </MainText>
          </div>
        </div>

      );
    }

    return (
      <>
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
        {
          availableBets.map((bet, index) => {
            return (
              <AvailBet key={index} currentBet={bet} handleClickBet={() => handleClickBet(bet)} />
            );
          })}
      </>
    );

  };

  return (
    <OverlayBackground>
      <Navbar />
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
        {getBetsContent()}
      </PageContainer>
      <CoverBetModal openedBet={selectedBetRef.current} openModal={openModal} handleClickBet={() => handleClickBet(null)} />
    </OverlayBackground>
  );
};
