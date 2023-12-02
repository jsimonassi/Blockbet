import React from "react";
import { ContainerStyled, TrophyStyled } from "./styles";

interface ChampionshipCardProps {
    name: string;
    onClick: () => void;
}

export const ChampionshipCard = (props: ChampionshipCardProps) => {
    return (
        <ContainerStyled onClick={props.onClick}>
            <h1>
                {props.name}
            </h1>
            <TrophyStyled
              src={require("../../../../assets/images/Trophy.png")}
              alt="Logo"
            />
        </ContainerStyled>
    );
};