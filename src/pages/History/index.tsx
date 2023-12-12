import React, { useEffect, useState } from "react";
import { MainButton, MainText, Navbar, OverlayBackground } from "../../components";
import { ContainerTitle } from "./styles";
import { Bet, OpenedBet } from "../../types/Bet";
import { BlockchainService } from "../../services/blockchain";
import { Api } from "../../services";
import toast from "react-hot-toast";
import { useSessionContext } from "../../contexts/Session";
import { AvailBetResult } from "./AvailBetResult";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";


export const History = () => {

  const [filteredBets, setFilteredBets] = useState<OpenedBet[] | null>(null);
  const { currentSession } = useSessionContext();
  const navigate = useNavigate();

  useEffect(() => {

    const runAsync = async () => {
      const toastRef = toast.loading("Carregando histórico de apostas...");
      try {
        const betList: Bet[] = await BlockchainService.getAllBets();
        const filteredList: Bet[] = betList.filter((bet) => bet.betOwnerAddress === currentSession?.address || bet?.betCoverAddress === currentSession?.address);
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
        setFilteredBets(openedBetList);
      } catch (e) {
        toast.error("Erro ao carregar histórico de apostas");
        setFilteredBets([]);
      } finally {
        toast.dismiss(toastRef);
      }
    };

    runAsync();
  }, []);


  const getBetsContent = () => {
    if (filteredBets === null) {
      return <MainText type="Bold" style={{ fontSize: "22px" }}>Carregando...</MainText>;
    }
    if (filteredBets.length === 0) {
      return (<div style={{marginTop: "50%"}}>
        <MainText type="Light" style={{ fontSize: "18px" }}>Você não possui apostas</MainText>
        <MainButton style={{marginTop: "20px", cursor: "pointer"}} type="Secondary" text="Criar aposta" onClick={() => navigate(ROUTES.CREATE_BET)} />
      </div>);
    }

    return filteredBets.map((bet, index) => {
      return (
        <AvailBetResult
          currentBet={bet}
          handleClickBet={() => null}
          key={index}
        />
      );
    });
  };

  return (
    <OverlayBackground>
      <Navbar />
      <ContainerTitle>
        <MainText type="Bold" style={{ fontSize: "26px" }}>Histórico de apostas</MainText>
      </ContainerTitle>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {getBetsContent()}
      </div>

    </OverlayBackground>
  );
};