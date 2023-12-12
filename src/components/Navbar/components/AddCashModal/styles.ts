import styled from "styled-components";
import { THEMES } from "../../../../constants/theme";

interface CreateBetButtonProps {
  disabledButton: boolean;
}

interface BetChoiceProps {
  disabledButton: boolean;
}

interface SelectedTeamProps {
  selected: boolean;
}

export const EscudosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
  margin-bottom: 2%;
  img {
    width: 60px;
    height: 60px;
  }
`;

export const BetContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 20vh;
`;

export const WinButton = styled.button<BetChoiceProps>`
  width: 174px;
  height: 40px;
  border-radius: 5px;
  background: ${THEMES.DARK_THEME.palette.primaryColor};
  outline: transparent;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  opacity: ${(props) => (props.disabledButton ? 0.5 : 1)};
  border: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  margin-bottom: 10px;
`;

export const DrawButton = styled.button<BetChoiceProps>`
  width: 174px;
  cursor: pointer;
  height: 40px;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  opacity: ${(props) => (props.disabledButton ? 0.5 : 1)};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const InputValueContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const CreateBetContainer = styled.div`
  display: flex;
`;

export const CreateBetButton = styled.button<CreateBetButtonProps>`
  width: 174px;
  height: 40px;
  border-radius: 5px;
  background: ${THEMES.DARK_THEME.palette.primaryColor};
  outline: transparent;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  align-self: center;

  opacity: ${(props) => (props.disabledButton ? 0.5 : 1)};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(${(props) => (props.disabledButton ? 1.0 : 1.1)});
  }
`;

export const SelectedTeam = styled.div<SelectedTeamProps>`
  height: 8vh;
  width: 6vw;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.selected
      ? THEMES.DARK_THEME.palette.primaryColor
      : THEMES.DARK_THEME.palette.surface1};
`;
