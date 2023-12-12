import styled from "styled-components";
import { Helpers } from "../../helpers";

interface IButtonContainerStyledProps {
    type: "Primary" | "Secondary"
}

export const ButtonContainerStyled = styled.div < IButtonContainerStyledProps > `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    background: ${props => props.type === "Primary" ? Helpers.Style.getAppGradientBackground(props.theme) : props.theme.palette.icons};

    color: ${props => props.type === "Primary" ? props.theme.palette.textPrimary : props.theme.palette.primaryColor};

    &:hover {
        opacity: 0.8;
    }

`;