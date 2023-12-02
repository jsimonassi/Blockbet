import React from "react";
import { ExpandableInfosStyled, LogoStyled, NavbarProfile, NavbarStyled } from "./styles";
import { CreateBetButton } from "../../pages/Home/styles";


export const Navbar = () => {
    return (
        <NavbarStyled>
            <ExpandableInfosStyled>
                <LogoStyled
                    src={require("../../assets/images/logo.png")}
                    alt="Logo"
                />
            </ExpandableInfosStyled>
            <NavbarProfile>
                <CreateBetButton>CRIAR APOSTA</CreateBetButton>
                PERFIL
            </NavbarProfile>
        </NavbarStyled>
    );
};