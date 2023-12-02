import styled from "styled-components";
import { Helpers } from "../../../../helpers";

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  background: ${(props) => Helpers.Style.getAppGradientBackground(props.theme)};
  width: 100%;
  height: 60px;
  border-radius: 32px;
  margin-top: 8px;
  padding-left: 8px;

  h1 {
    font-family: "NovaFlat";
    font-size: 48px;
    color: ${(props) => props.theme.palette.textPrimary};
    margin-left: 8px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

`;


export const TrophyStyled = styled.img`
    max-width: 70px;
    height: 60px;
    margin-right: 4px;
`;