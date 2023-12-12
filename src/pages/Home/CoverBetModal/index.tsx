import { Box, Checkbox, Dialog, DialogContent, FormControlLabel } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { THEMES } from "../../../constants/theme";
import { MainText } from "../../../components";
import { ShieldImage } from "../AvailBet/styles";
import { ButtonCoverBet, ButtonDrawBet } from "../styles";
import { CoverType, OpenedBet } from "../../../types/Bet";
import { useSessionContext } from "../../../contexts/Session";
import { BlockchainService } from "../../../services/blockchain";
import { toast } from "react-hot-toast";

interface OwnProps {
    openModal: boolean;
    handleClickBet: () => void;
    openedBet: OpenedBet | null;
}

export const CoverBetModal = ({ openModal, handleClickBet, openedBet }: OwnProps) => {

    if (openedBet == null) {
        return null;
    }

    const [disabledDraw, setDisabledDraw] = useState(true);
    const [disabledWin, setDisabledWin] = useState(true);
    const [checkboxValue, setCheckboxValue] = useState(false);
    const { currentSession } = useSessionContext();


    useEffect(() => {
        if (checkboxValue) {
            setDisabledDraw(false);
            setDisabledWin(false);
        } else {
            setDisabledDraw(true);
            setDisabledWin(true);
        }
    }, [checkboxValue]);

    const handleBet = async (coverType: CoverType) => {
        const toastRef = toast.loading("Cobrindo aposta...");
        handleClickBet();
        handleResetAll();
        try{
            const updatedBet = openedBet.bet;
            updatedBet.betCoverAddress = currentSession?.address ?? "";
            updatedBet.betCoverType = coverType;
            await BlockchainService.coverBet(updatedBet);
            toast.success("Aposta coberta com sucesso!");
        }catch(err){
            toast.error("Erro ao cobrir aposta!");
        } finally {
            toast.dismiss(toastRef);
        }
    };

    const handleResetAll = () => {
        setDisabledDraw(true);
        setDisabledWin(true);
        setCheckboxValue(false);
    };

    const getBetType = () => {
        if (openedBet.bet.betOwnerType === "home") {
            return openedBet.match.time_mandante.nome_popular + " vence";
        } else if (openedBet.bet.betOwnerType === "away") {
            return openedBet.match.time_visitante.nome_popular + " vence";
        } else {
            return "Empate";
        }
    };

    const getButtonsGroup = () => {
        if (openedBet.bet.betOwnerType === "home") {
            return (
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                        gap: "2%",
                    }}
                >
                    <ButtonDrawBet
                        disabled={disabledDraw}
                        disabledDraw={disabledDraw}
                        onClick={() => handleBet("draw")}
                    >
                        <MainText
                            type="Medium"
                            style={{ fontSize: "14px", color: "#E27031" }}
                        >
                            Empate
                        </MainText>
                    </ButtonDrawBet>
                    <ButtonCoverBet
                        onClick={() => handleBet("away")}
                        disabled={disabledWin}
                        disabledWin={disabledWin}
                    >
                        <MainText type="Medium" style={{ fontSize: "14px" }}>
                            {openedBet.match.time_visitante.nome_popular} vence
                        </MainText>
                    </ButtonCoverBet>
                </div>
            );
        } else if (openedBet.bet.betOwnerType === "away") {
            return (
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                        gap: "2%",
                    }}
                >
                    <ButtonDrawBet
                        disabled={disabledDraw}
                        disabledDraw={disabledDraw}
                        onClick={() => handleBet("draw")}
                    >
                        <MainText
                            type="Medium"
                            style={{ fontSize: "14px", color: "#E27031" }}
                        >
                            Empate
                        </MainText>
                    </ButtonDrawBet>
                    <ButtonCoverBet
                        onClick={() => handleBet("home")}
                        disabled={disabledWin}
                        disabledWin={disabledWin}
                    >
                        <MainText type="Medium" style={{ fontSize: "14px" }}>
                            {openedBet.match.time_mandante.nome_popular} vence
                        </MainText>
                    </ButtonCoverBet>
                </div>
            );
        } else {
            return (
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                        gap: "2%",
                    }}
                >
                    <ButtonDrawBet
                        disabled={disabledDraw}
                        disabledDraw={disabledDraw}
                        onClick={() => handleBet("home")}
                    >
                        <MainText
                            type="Medium"
                            style={{ fontSize: "14px", color: "#E27031" }}
                        >
                            {openedBet.match.time_mandante.nome_popular} vence
                        </MainText>
                    </ButtonDrawBet>
                    <ButtonCoverBet
                        onClick={() => handleBet("away")}
                        disabled={disabledWin}
                        disabledWin={disabledWin}
                    >
                        <MainText type="Medium" style={{ fontSize: "14px" }}>
                            {openedBet.match.time_visitante.nome_popular} vence
                        </MainText>
                    </ButtonCoverBet>
                </div>
            );
        }
    };



    return (
        <Dialog
            open={openModal}
            onClose={() => {
                handleClickBet();
                handleResetAll();
            }}
            PaperProps={{
                style: {
                    minHeight: "20vh",
                    minWidth: "25vw",
                    borderRadius: "8px",
                    justifyContent: "flex-start",
                },
            }}>
            <Box
                style={{
                    display: "column",
                    backgroundColor: THEMES.DARK_THEME.palette.surface1,
                    top: "50%",
                    left: "50%",
                    alignItems: "flex-start",
                }}
            >
                <div
                    style={{
                        backgroundColor: THEMES.DARK_THEME.palette.surface1,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <MainText
                        type={"Medium"}
                        style={{
                            fontSize: "22px",
                            color: THEMES.DARK_THEME.palette.textPrimary,
                            marginLeft: "5%",
                            marginTop: "2%",
                        }}
                    >
                        Cobrir aposta
                    </MainText>
                    <div
                        style={{
                            marginRight: "2%",
                            marginTop: "2%",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            handleClickBet();
                            handleResetAll();
                        }}
                    >
                        <MainText
                            type="Bold"
                            align="end"
                            style={{
                                fontSize: "22px",
                                color: THEMES.DARK_THEME.palette.primaryColor,
                            }}
                        >
                            X
                        </MainText>
                    </div>
                </div>

                <DialogContent
                    style={{
                        display: "column",
                        alignItems: "flex-start",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            gap: "1vw",
                            marginBottom: "1vh",
                        }}
                    >
                        <ShieldImage
                            src={openedBet.match.time_mandante.escudo}
                            alt="Logo"
                            style={{ width: "70px" }}
                        />
                        <MainText type="Bold" style={{ fontSize: "22px" }}>
                            X
                        </MainText>
                        <ShieldImage
                            src={openedBet.match.time_visitante.escudo}
                            alt="Logo"
                            style={{ width: "70px" }}
                        />
                    </div>
                    <MainText
                        type="Medium"
                        style={{ fontSize: "15px", color: "#C7C7C7" }}
                    >
                        {openedBet.match.data_realizacao} - {openedBet.match.hora_realizacao}
                    </MainText>
                    <MainText type="Bold" style={{ fontSize: "15px" }}>
                        {openedBet.match.time_mandante.nome_popular} X {openedBet.match.time_visitante.nome_popular}
                    </MainText>
                    <div
                        style={{
                            display: "column",
                            width: "100%",
                            alignItems: "flex-start",
                            marginTop: "2vh",
                        }}>
                        <div
                            style={{
                                display: "column",
                                marginLeft: "1vw",
                                marginBottom: "1vh",
                                marginTop: "1vh",
                            }}
                        >
                            <div style={{ display: "flex", marginBottom: "1vh" }}>
                                <MainText
                                    type="Bold"
                                    style={{ fontSize: "14px", color: "#C7C7C7" }}
                                >
                                    ●
                                </MainText>
                                <MainText
                                    type="Bold"
                                    style={{ fontSize: "14px", color: "#C7C7C7" }}
                                >
                                    {getBetType()}
                                </MainText>
                            </div>

                            <div style={{ display: "flex", marginBottom: "1vh" }}>
                                <MainText
                                    type="Bold"
                                    style={{ fontSize: "14px", color: "#C7C7C7" }}
                                >
                                    ●
                                </MainText>
                                <MainText
                                    type="Medium"
                                    style={{ fontSize: "14px", color: "#C7C7C7" }}
                                >
                                    Valor(FireCoins): {openedBet.bet.betValue}
                                </MainText>
                            </div>
                            <div style={{ display: "flex", marginBottom: "1vh" }}>
                                <MainText
                                    type="Bold"
                                    style={{ fontSize: "14px", color: "#C7C7C7" }}
                                >
                                    ●
                                </MainText>
                                <MainText
                                    type="Medium"
                                    style={{ fontSize: "14px", color: "#C7C7C7" }}
                                >
                                    ODD 2.0
                                </MainText>
                            </div>
                        </div>
        
                    </div>
                    <FormControlLabel
                        style={{
                            color: "",
                        }}
                        color="primary"
                        control={
                            <Checkbox
                                checked={checkboxValue}
                                onClick={() => setCheckboxValue((prev) => !prev)}
                                color="primary"
                                size="small"
                            />
                        }
                        label={
                            <div style={{ display: "flex" }}>
                                <MainText
                                    type="Medium"
                                    style={{
                                        fontSize: "14px",
                                        color: "#c7c7c7",
                                        marginRight: "4px",
                                    }}
                                >
                                    Concordo com os
                                </MainText>
                                <MainText
                                    type="Medium"
                                    style={{ fontSize: "14px", color: "#5FA5E5" }}
                                >
                                    termos de uso
                                </MainText>
                            </div>
                        }
                    />
                    {getButtonsGroup()}
                </DialogContent>
            </Box>
        </Dialog>
    );


};