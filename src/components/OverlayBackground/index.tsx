import React from "react";
import { OverlayBackgroundStyled } from "./styles";

interface OverlayBackgroundProps {
    children: React.ReactNode;
}


export const OverlayBackground = ({children}: OverlayBackgroundProps) => {

    return (
        <OverlayBackgroundStyled>
            {children}
        </OverlayBackgroundStyled>
    );
};