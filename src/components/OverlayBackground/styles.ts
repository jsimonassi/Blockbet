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