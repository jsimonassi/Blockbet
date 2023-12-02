/* eslint-disable @typescript-eslint/no-var-requires */
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import React, { useState } from "react";
import { MainText, Navbar } from "../../components";
import { THEMES } from "../../constants/theme";
import { AvailBet } from "./AvailBet";
import { ShieldImage } from "./AvailBet/styles";
import {
  BrasileiraoText,
  ButtonCoverBet,
  ButtonDrawBet,
  OverlayBackgroundStyled,
  OverlayBrasileiro,
  PageContainer,
  TextOverlayBrasileiro,
  TitleOverlayBrasileiro,
  TrophyContainer,
  TrophyStyled,
} from "./styles";

export const Home = ({ classes }: any) => {
  const [openModal, setOpenModal] = useState(false);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const handleClickBet = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <OverlayBackgroundStyled>
      <Navbar />
      <PageContainer>
        <OverlayBrasileiro>
          <TextOverlayBrasileiro>
            <TitleOverlayBrasileiro>Campeonato</TitleOverlayBrasileiro>
            <BrasileiraoText>Brasileiro</BrasileiraoText>
          </TextOverlayBrasileiro>
          <TrophyContainer>
            <TrophyStyled
              src={require("../../assets/images/Trophy.png")}
              alt="Logo"
            />
          </TrophyContainer>
        </OverlayBrasileiro>
        <div style={{ height: "5vh" }}></div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "4vh",
          }}
        >
          <MainText type="Bold" style={{ fontSize: "22px" }}>
            Apostas disponíveis
          </MainText>
        </div>

        <AvailBet handleClickBet={handleClickBet} />
        <AvailBet handleClickBet={handleClickBet} />
        <AvailBet handleClickBet={handleClickBet} />
      </PageContainer>
      {openModal && (
        <Dialog
          open={openModal}
          onClose={handleClickBet}
          PaperProps={{
            style: {
              minHeight: "20vh",
              minWidth: "25vw",
              borderRadius: "25px",
              justifyContent: "flex-start",
            },
          }}
        >
          <Box
            style={{
              display: "column",
              backgroundColor: THEMES.DARK_THEME.palette.surface1,
              top: "50%",
              left: "50%",
              alignItems: "flex-start",
            }}
          >
            <DialogTitle style={{ display: "flex" }}>
              <MainText type="Bold" align="left" style={{ fontSize: "15px" }}>
                Confirmar aposta
              </MainText>
            </DialogTitle>

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
                  src={require("../../assets/images/Botafogo.png")}
                  alt="Logo"
                />
                <MainText type="Bold" style={{ fontSize: "22px" }}>
                  X
                </MainText>
                <ShieldImage
                  src={require("../../assets/images/Coritiba.png")}
                  alt="Logo"
                />
              </div>
              <MainText
                type="Medium"
                style={{ fontSize: "15px", color: "#C7C7C7" }}
              >
                01/01/2023 - 16:00
              </MainText>
              <MainText type="Bold" style={{ fontSize: "15px" }}>
                Botafogo x Coritiba
              </MainText>
              <div
                style={{
                  display: "column",
                  width: "100%",
                  alignItems: "flex-start",
                  marginTop: "2vh",
                }}
              >
                <MainText type="Bold" align="left" style={{ fontSize: "15px" }}>
                  Gustavo Luppi Siloto
                </MainText>
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
                      Botafogo vence
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
                      Valor R$ 50,00
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

                <div style={{ display: "flex", marginBottom: "0.5vh" }}>
                  <MainText type="Medium" style={{ fontSize: "14px" }}>
                    Valor da cobertura:
                  </MainText>
                </div>
                <input
                  style={{
                    borderRadius: "8px",
                    border: "0px",
                    backgroundColor: "#D9D9D9",
                    height: "5vh",
                    width: "9vw",
                    outline: "none",
                  }}
                ></input>
              </div>
              <FormControlLabel
                style={{
                  color: "",
                }}
                color="primary"
                control={<Checkbox color="primary" size="small" />}
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
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "flex-end",
                  gap: "2%",
                }}
              >
                <ButtonDrawBet>
                  <MainText
                    type="Medium"
                    style={{ fontSize: "14px", color: "#E27031" }}
                  >
                    Empate
                  </MainText>
                </ButtonDrawBet>
                <ButtonCoverBet>
                  <MainText type="Medium" style={{ fontSize: "14px" }}>
                    Vitória
                  </MainText>
                </ButtonCoverBet>
              </div>
            </DialogContent>
          </Box>
        </Dialog>
      )}
    </OverlayBackgroundStyled>
  );
};
