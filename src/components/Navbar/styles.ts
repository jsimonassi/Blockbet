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
