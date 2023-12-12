import styled from "styled-components";

export const NavbarStyled = styled.div`
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
  cursor: pointer;
  &:hover {
    transform: scale(1.04);
  }
`;

export const LogoStyled = styled.img`
  margin-left: 2vw;
  width: 230px;
`;

export const PerfilStyled = styled.img`
  width: 50px;
  cursor: pointer;
`;

export const NavbarProfile = styled.div`
  display: flex;
  width: 79%;
  justify-content: flex-end;
  align-items: center;
  gap: 1vw;
`;
