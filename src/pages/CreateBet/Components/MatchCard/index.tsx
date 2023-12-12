import React, { ReactComponentElement, ReactElement } from "react";
import { Match } from "../../../../types/api/Match";
import { LogosContainer, MatchContainer } from "./styles";
import { MainText } from "../../../../components";
import { useTheme } from "styled-components";

interface MatchCardProps {
    match: Match;
    onClick: () => void;
}

export const MatchCard = (props: MatchCardProps) => {

    // const AwayTeamLogo = props.match.time_visitante.escudo;
    const currentTheme = useTheme();

    return (
        <MatchContainer onClick={props.onClick}>
            <LogosContainer>
                <img src={props.match.time_mandante.escudo} alt="" />
                <MainText type="Bold" style={{fontSize: "48px"}}>X</MainText>
                <img src={props.match.time_visitante.escudo} alt="" />
            </LogosContainer>
            <MainText type="Light" style={{ fontSize: "18px", color: currentTheme.palette.textSecondary }}> {props.match.data_realizacao + " - " + props.match.hora_realizacao} </MainText>
        </MatchContainer>
    );

};