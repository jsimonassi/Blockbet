import React from "react";
import {
  PickChampionshipContainer,
  RowContainer,
  StackContainer,
} from "./styles";
import { ReactComponent as BackIcon } from "../../../../assets/images/Back.svg";
import { MainText } from "../../../../components";
import { ChampionshipCard } from "../ChampionshipCard";
import { useNavigate } from "react-router-dom";
import { CONSTANTS } from "../../../../constants";

interface SelectChampionshipProps {
  championshipList: string[];
  onChampionshipClick: (championship: string) => void;
}

export const SelectChampionship = ({
  championshipList,
  onChampionshipClick,
}: SelectChampionshipProps) => {
  const navigate = useNavigate();

  return (
    <StackContainer>
      <RowContainer>
        <BackIcon
          style={{ width: "24px", height: "24px", cursor: "pointer" }}
          onClick={() => navigate(CONSTANTS.ROUTES.HOME)}
        />
        <MainText type="Medium" style={{ fontSize: "18px" }}>
          Criar aposta
        </MainText>
      </RowContainer>
      <hr />
      <PickChampionshipContainer>
        <MainText type="Light">Escolha um campeonato:</MainText>
        {championshipList.map((championship, index) => {
          return (
            <ChampionshipCard
              key={index}
              name={championship}
              onClick={() => onChampionshipClick(championship)}
            />
          );
        })}
      </PickChampionshipContainer>
    </StackContainer>
  );
};
