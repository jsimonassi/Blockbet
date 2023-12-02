import React from "react";
import { ExpandableInfosStyled, LogoStyled, NavbarProfile, NavbarStyled } from "./styles";
import { CreateBetButton } from "../../pages/Home/styles";
import { MainText } from "../MainText";
import { useNavigate } from "react-router-dom";
import { CONSTANTS } from "../../constants";


export const Navbar = () => {

    const navigate = useNavigate();
    
    return (
        <NavbarStyled>
            <ExpandableInfosStyled>
                <LogoStyled
                    src={require("../../assets/images/logo.png")}
                    alt="Logo"
                />
            </ExpandableInfosStyled>
            <NavbarProfile>
                <CreateBetButton
                    onClick={() => navigate(CONSTANTS.ROUTES.CREATE_BET)}
                >
                    <MainText
                        type="Medium"
                        align="center"
                    >
                        Criar Aposta
                    </MainText>
                </CreateBetButton>
                PERFIL
            </NavbarProfile>
        </NavbarStyled>
    );
};