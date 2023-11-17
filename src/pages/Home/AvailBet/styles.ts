import styled from "styled-components";

export const ContainerBet = styled.div`
  display: flex;
  width: 100%;
  height: 15vh;
  background-color: ${(props) => props.theme.palette.surface1};
  border-radius: 20px;
  text-align: "left";
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 2vh;
`;

export const InfoBet = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2vw;
  margin-top: 1vh;
  align-items: flex-start;
  height: 100%;
  width: 60vw;
`;

export const UserContainer = styled.div`
  display: flex;
  margin-bottom: 1vh;
  gap: 0.5vw;
  align-items: center;
`;

export const MatchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: "right";
  margin-bottom: 1vh;
  gap: 1vw;
`;

export const MatchInfo = styled.div`
  display: flex;
  width: 20vw;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  text-align: right;
`;

export const ShieldImage = styled.img`
  width: 40px;
`;
