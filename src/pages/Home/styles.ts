import styled from "styled-components";

export const OverlayBackgroundStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.palette.pageBackground};
  height: 100%;
  width: 100%;
`;

export const Navbar = styled.div`
  display: flex;
  width: 98%;
  margin-top: 2vh;
  height: 10vh;
  background-color: ${(props) => props.theme.palette.navbar};
  border-radius: 5px;
`;

export const ExpandableInfosStyled = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 20%;
  &:hover {
    transform: scale(1.1);
  }
`;

export const LogoStyled = styled.img`
  margin-left: 2vw;
  max-width: 300px;
`;

export const NavbarProfile = styled.div`
  display: flex;
  width: 79%;
  justify-content: flex-end;
  align-items: center;
  gap: 1vw;
`;

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

export const PageContainer = styled.div`
  width: 70vw;
  height: 20vh;
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

  font-family: "Nova Flat" !important;
  font-size: 48px;
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

export const ButtonDrawBet = styled.button`
  background-color: #fff;
  border-radius: 5px;
  color: #fff;
  height: 4vh;
  width: 5vw;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

export const ButtonCoverBet = styled.button`
  background-color: ${(props) => props.theme.palette.navbarCreateBetButton};
  border-radius: 5px;
  color: #fff;
  height: 4vh;
  width: 5vw;
  border: none;
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
