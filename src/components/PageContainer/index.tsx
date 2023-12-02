import React from "react";
import { PageContainerStyled } from "./styles";

interface PageContainerProps {
    children: React.ReactNode;
}

export const PageContainer = ({children}: PageContainerProps) => {

    return (
        <PageContainerStyled>
            {children}
        </PageContainerStyled>
    );
};