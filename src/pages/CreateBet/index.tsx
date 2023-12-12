import React, { useEffect, useState } from "react";
import {
  MainText,
  Navbar,
  OverlayBackground,
  PageContainer,
} from "../../components";
import { MatchCard, SelectChampionship } from "./Components";
import { ResultsContainer, ResultsMatches } from "./styles";
import { Match } from "../../types/api/Match";
import { Api } from "../../services";
import { send } from "../../services/blockchain";
import { CreateBetModal } from "./Components/CreateBetModal";
import { CircularProgress } from "@material-ui/core";
import { THEMES } from "../../constants/theme";

export const CreateBet = () => {
  const [availableMatches, setAvailableMatches] = useState<Match[] | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);
  const [match, setMatch] = useState<Match>({
    partida_id: 0,
    placar: "",
    time_mandante: {
      time_id: 0,
      nome_popular: "",
      sigla: "",
      escudo: "",
    },
    time_visitante: {
      time_id: 0,
      nome_popular: "",
      sigla: "",
      escudo: "",
    },
    placar_mandante: null,
    placar_visitante: null,
    disputa_penalti: false,
    status: "",
    slug: "",
    data_realizacao: "",
    hora_realizacao: "",
    data_realizacao_iso: "",
    estadio: {
      estadio_id: 0,
      nome_popular: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const onChampionshipClick = async () => {
    setLoading(true);
    Api.getMatches(10).then((response) => {
      setAvailableMatches(response);
    });
  };

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    setLoading(false);
  }, [availableMatches]);

  console.log(loading, "loading");
  return (
    <OverlayBackground>
      <Navbar />
      <PageContainer>
        <SelectChampionship
          championshipList={["Brasileirão"]}
          onChampionshipClick={onChampionshipClick}
        />
        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "6vh",
            }}
          >
            <CircularProgress
              style={{ color: THEMES.DARK_THEME.palette.primaryColor }}
            />{" "}
          </div>
        )}
        {availableMatches && availableMatches.length > 0 && (
          <ResultsContainer>
            <MainText type="Light" style={{ fontSize: "22px" }}>
              {" "}
              Escolha uma partida:{" "}
            </MainText>

            <ResultsMatches>
              {availableMatches.map((match, index) => {
                return (
                  <>
                    <MatchCard
                      key={index}
                      match={match}
                      onClick={() => {
                        handleClick();
                        setMatch(match);
                      }}
                    />
                  </>
                );
              })}
            </ResultsMatches>
          </ResultsContainer>
        )}
      </PageContainer>
      <CreateBetModal isOpen={isOpen} handleClick={handleClick} match={match} />
    </OverlayBackground>
  );
};
