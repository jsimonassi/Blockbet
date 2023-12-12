import {
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  FormControlLabel,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { MainText } from "../../../../components";
import { Match } from "../../../../types/api/Match";
import {
  BetContainer,
  CreateBetButton,
  DrawButton,
  EscudosContainer,
  InputValueContainer,
  SelectedTeam,
  WinButton,
} from "./styles";
import { THEMES } from "../../../../constants/theme";
import { Bet } from "../../../../types/Bet";
import { useSessionContext } from "../../../../contexts/Session";
import { BlockchainService } from "../../../../services/blockchain";
import { toast } from "react-hot-toast";

interface CreateBetModalProps {
  isOpen: boolean;
  handleClose: () => void;
  match: Match;
}

export const CreateBetModal = ({
  isOpen,
  handleClose,
  match,
}: CreateBetModalProps) => {
  const [disabledCreateButton, setDisabledCreateButton] = useState(true);
  const [disabledWinHome, setDisabledWinHome] = useState(false);
  const [disabledWinAway, setDisabledWinAway] = useState(false);
  const [disabledWinDraw, setDisabledWinDraw] = useState(false);
  const [surfaceHome, setSurfaceHome] = useState(false);
  const [surfaceAway, setSurfaceAway] = useState(false);

  const {currentSession} = useSessionContext();

  const [value, setValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);

  console.log(disabledCreateButton, "disabledCreateButton");

  const TextAbstract = (text: string, length: number) => {
    if (text == null) {
      return "";
    }
    if (text.length <= length) {
      return text;
    }
    text = text.substring(0, length);
    const last = text.lastIndexOf(" ");
    text = text.substring(0, last);
    return text + "...";
  };

  const handleDisableCreateBetButton = () => {
    if (
      (disabledWinHome || disabledWinAway || disabledWinDraw) &&
      value !== "" &&
      value !== "0" &&
      checkboxValue
    ) {
      setDisabledCreateButton(false);
    } else {
      setDisabledCreateButton(true);
    }
  };

  useEffect(() => {
    handleDisableCreateBetButton();
    if (!disabledWinHome) {
      setSurfaceHome(true);
      setSurfaceAway(false);
    }
    if (!disabledWinAway) {
      setSurfaceHome(false);
      setSurfaceAway(true);
    }
    if (!disabledWinDraw) {
      setSurfaceHome(false);
      setSurfaceAway(false);
    }
  }, [disabledWinHome, disabledWinAway, disabledWinDraw, value, checkboxValue]);

  const handleResetAll = () => {
    setSurfaceHome(false);
    setSurfaceAway(false);
    setValue("");
    setCheckboxValue(false);
    setDisabledWinAway(false);
    setDisabledWinDraw(false);
    setDisabledWinHome(false);
  };

  const createBet = async () => {

    handleClose();
    const toatRef = toast.loading("Criando aposta...");

    const betOwnerType = !disabledWinHome ? "home" : !disabledWinAway ? "away" : "draw";
    const newBet: Bet = {
      matchId: match.partida_id,
      betOwnerAddress: currentSession?.address ?? "",
      betValue: parseFloat(value),
      betOwnerType: betOwnerType, 
    };

    if(!currentSession?.balance || newBet.betValue > currentSession?.balance){
      toast.dismiss(toatRef);
      toast.error("Saldo insuficiente");
      return;
    }

    BlockchainService.createBet(newBet)
    .then(() => {
      toast.success("Aposta criada com sucesso!");
    }).catch((e) => {
      console.log(e);
      toast.error("Erro ao criar aposta");
    }).finally(() => {
      toast.dismiss(toatRef);
    });
  };

  useEffect(() => {
    setSurfaceHome(false);
    setSurfaceAway(false);
  }, []);

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        handleClose();
        handleResetAll();
      }}
      style={{borderRadius: "32px"}}

      PaperProps={{
        style: {
            minHeight: "20vh",
            minWidth: "25vw",
            borderRadius: "8px",
            justifyContent: "flex-start",
        },
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
          Criar aposta
        </MainText>
        <div
          style={{ marginRight: "2%", marginTop: "2%", cursor: "pointer" }}
          onClick={() => {
            handleClose();
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
          backgroundColor: THEMES.DARK_THEME.palette.surface1,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <EscudosContainer>
          <SelectedTeam selected={surfaceHome}>
            <img src={match.time_mandante.escudo} alt="Escudo" />
          </SelectedTeam>
          <MainText
            type={"Bold"}
            style={{
              fontSize: "22px",
              color: THEMES.DARK_THEME.palette.textPrimary,
            }}
          >
            X
          </MainText>
          <SelectedTeam selected={surfaceAway}>
            <img src={match.time_visitante.escudo} alt="Escudo" />
          </SelectedTeam>
        </EscudosContainer>
        <MainText
          type="Medium"
          style={{
            fontSize: "15px",
            color: THEMES.DARK_THEME.palette.textSecondary,
          }}
        >
          {match.data_realizacao}
        </MainText>
        <MainText
          type="Medium"
          style={{
            fontSize: "18px",
            color: THEMES.DARK_THEME.palette.textPrimary,
          }}
        >
          {match.time_mandante.nome_popular} X{" "}
          {match.time_visitante.nome_popular}
        </MainText>
        <DialogActions>
          <BetContainer>
            <WinButton
              disabledButton={disabledWinHome}
              onClick={() => {
                setDisabledWinHome(false);
                setDisabledWinDraw(true);
                setDisabledWinAway(true);
              }}
            >
              <MainText type="Medium" style={{ fontSize: "15px" }}>
                {TextAbstract(
                  `Vitória  ${match.time_mandante.nome_popular}`,
                  30
                )}
              </MainText>
            </WinButton>
          </BetContainer>
          <BetContainer>
            <DrawButton
              disabledButton={disabledWinDraw}
              onClick={() => {
                setDisabledWinHome(true);
                setDisabledWinDraw(false);
                setDisabledWinAway(true);
              }}
            >
              <MainText
                type="Medium"
                style={{
                  fontSize: "15px",
                  color: THEMES.DARK_THEME.palette.primaryColor,
                }}
              >
                Empate
              </MainText>
            </DrawButton>
          </BetContainer>
          <BetContainer>
            <WinButton
              disabledButton={disabledWinAway}
              onClick={() => {
                setDisabledWinHome(true);
                setDisabledWinDraw(true);
                setDisabledWinAway(false);
              }}
            >
              <MainText type="Medium" style={{ fontSize: "15px" }}>
                {TextAbstract(
                  `Vitória  ${match.time_visitante.nome_popular}`,
                  30
                )}
              </MainText>
            </WinButton>
          </BetContainer>
        </DialogActions>
        <InputValueContainer>
          <MainText type="Bold" style={{ fontSize: "15px" }}>
            Valor:
          </MainText>

          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            style={{
              borderRadius: "8px",
              border: "0px",
              backgroundColor: "#D9D9D9",
              height: "5vh",
              width: "9vw",
              outline: "none",
            }}
          />
        </InputValueContainer>
        <FormControlLabel
          style={{
            marginLeft: "1vw",
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
        <CreateBetButton
          disabledButton={disabledCreateButton}
          disabled={disabledCreateButton}
          onClick={createBet}
        >
          <MainText type="Medium" style={{ fontSize: "15px" }}>
            Criar aposta
          </MainText>
        </CreateBetButton>
      </DialogContent>
    </Dialog>
  );
};
