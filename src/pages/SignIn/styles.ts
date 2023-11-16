import styled from "styled-components";

export const ContainerStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: stretch;
`;

export const OverlayBackgroundStyled = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 300px solid transparent;
    border-top: 100vh solid ${props => props.theme.palette.primaryColor};
    position: fixed;
    top: 0;
    left: 0;
    width: 55%;
    opacity: 1;
`;

export const LeftSideStyled = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    flex: 5;
    background-color: ${props => props.theme.palette.viniBackground};
`;

export const RightSideStyled = styled(LeftSideStyled)`
    flex: 4;
`;

export const ViniImageStyled = styled.img`
    width: 100%;
    min-width: 500px;
    max-width: 1000px;
`;

export const InfosContainerStyled = styled.div`
    display: flex;
    z-index: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 55%;
    min-width: 350px;
`;

export const LogoStyled = styled.img`
    width: 100%;
    max-width: 600px;
`;

export const ExpandableInfosStyled = styled.div`
    transition: transform 0.3s ease-in-out;

    &:hover {
            transform: scale(1.1);
        }
`;
