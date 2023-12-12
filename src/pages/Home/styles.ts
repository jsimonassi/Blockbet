import styled from "styled-components";

interface DrawButtonProps {
  disabledDraw: boolean;
}

interface WinButtonProps {
  disabledWin: boolean;
}

export const CreateBetButton = styled.button`
  background-color: ${(props) => props.theme.palette.navbarCreateBetButton};
  border-radius: 5px;
  color: #fff;
  height: 4vh;
  width: 10vw;
  border: none;
  cursor: pointer;
  font-size: 18px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const OverlayBrasileiro = styled.div`
  display: flex;
  flex-direction: "row";
  width: 100%;
  height: 20vh;
  background-color: ${(props) => props.theme.palette.primaryColor};
  border-radius: 30px;
  margin-top: 3vh;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const TitleOverlayBrasileiro = styled.h1`
  color: #fff;
  font-family: NotoSerifTamilSlanted;
  font-style: italic;
  font-size: 25px;
  font-family: "NovaFlat";
`;

export const TextOverlayBrasileiro = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  justify-content: center;
  text-align: left;
  margin-left: 2vw;
`;

export const BrasileiraoText = styled.h1`
  color: #fff;

  font-family: "NovaFlat";
  font-size: 90px;
  font-weight: 400;
  line-height: normal;
`;

export const TrophyContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  margin-left: 2vw;
`;

export const TrophyStyled = styled.img`
  max-width: 200px;
`;

export const AvailBetText = styled.h1`
  font-family: "Nunito";
  color: #fff;
  font-style: bold;
  font-size: 20px;
`;

export const ButtonDrawBet = styled.button<DrawButtonProps>`
  background-color: #fff;
  border-radius: 5px;
  color: #fff;
  height: 4vh;
  width: 5vw;
  border: none;
  opacity: ${(props) => (props.disabledDraw ? 0.5 : 1)};
  cursor: pointer;
  font-size: 18px;
`;

export const ButtonCoverBet = styled.button<WinButtonProps>`
  background-color: ${(props) => props.theme.palette.navbarCreateBetButton};
  border-radius: 5px;
  color: #fff;
  height: 4vh;
  padding-left: 10px;
  padding-right: 10px;
  border: none;
  opacity: ${(props) => (props.disabledWin ? 0.5 : 1)};
  cursor: pointer;
  font-size: 18px;
`;

export const BetInput = styled.input`
  border-radius: "8px";
  border: "0px";
  background-color: "#D9D9D9";
  height: "5vh";
  width: "5vw";
  outline: "none";
`;
