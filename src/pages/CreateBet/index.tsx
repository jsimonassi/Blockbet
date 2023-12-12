import React, { useState } from "react";
import { MainText, Navbar, OverlayBackground, PageContainer } from "../../components";
import { MatchCard, SelectChampionship } from "./Components";
import { ResultsContainer, ResultsMatches } from "./styles";
import { Match } from "../../types/api/Match";
import { Api } from "../../services";
import { send } from "../../services/blockchain";

export const CreateBet = () => {

    const [availableMatches, setAvailableMatches] = useState<Match[] | null>(null);

    const onChampionshipClick = async () => {
        Api.getMatches(10).then((response) => {
            setAvailableMatches(response);
        });
    };

    const handleCreateBet = () => {
        console.log("Cliquei");
        send();
    };

    return (
        <OverlayBackground>
            <Navbar />
            <PageContainer>
                <SelectChampionship championshipList={["Brasileirão"]} onChampionshipClick={onChampionshipClick} />
                {
                    availableMatches && availableMatches.length > 0 &&
                    <ResultsContainer>
                        <MainText type="Light" style={{ fontSize: "22px" }}> Escolha uma partida: </MainText>
                        <ResultsMatches >
                            {
                                availableMatches.map((match, index) => {
                                    return (
                                        <MatchCard key={index} match={match} onClick={handleCreateBet} />
                                    );
                                })
                            }
                        </ResultsMatches>
                    </ResultsContainer>
                }
            </PageContainer>
        </OverlayBackground>
    );
};