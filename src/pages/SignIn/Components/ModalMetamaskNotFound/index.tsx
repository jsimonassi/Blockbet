import React from "react";
import {
    Dialog,
    DialogContent,
    DialogActions,
} from "@material-ui/core";
import { useTheme } from "styled-components";
import { MainButton, MainText } from "../../../../components";

interface OwnProps {
    visible: boolean;
    onClose: () => void;
    onInstallMetamask: () => void;
}

export const ModalMetamaskNotFound = (props: OwnProps) => {

    const currentTheme = useTheme();


    return (
        <Dialog
            open={props.visible}
            onClose={props.onClose}
            PaperProps={{
                style: {
                    borderRadius: "8px",
                    maxWidth: "450px",
                },
            }}
        >
            <DialogContent
                style={{ backgroundColor: currentTheme.palette.surface1 }}
            >
                <MainText style={{ fontSize: "22px" }} type={"Medium"}> Você precisa instalar a Metamask para continuar </MainText>
                <DialogActions style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                    <MainButton
                        text="Sair"
                        onClick={props.onClose}
                        type="Secondary"
                        style={{ width: "40%" }}
                    />
                    <MainButton
                        text="Instalar Metamask"
                        onClick={props.onInstallMetamask}
                        type="Primary"
                        style={{ width: "40%"}}
                    />
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
};