/* eslint-disable @typescript-eslint/no-var-requires */
import {
  Modal,
  Box,
  Typography,
  Dialog,
  DialogContent,
  WithStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { MainText } from "../../components";
import { THEMES } from "../../constants/theme";
import { AvailBet } from "./AvailBet";
import { ShieldImage } from "./AvailBet/styles";
import {
  AvailBetText,
  BrasileiraoText,
  ButtonCoverBet,
  ButtonDrawBet,
  CreateBetButton,
  ExpandableInfosStyled,
  LogoStyled,
  Navbar,
  NavbarProfile,
  OverlayBackgroundStyled,
  OverlayBrasileiro,
  PageContainer,
  TextOverlayBrasileiro,
  TitleOverlayBrasileiro,
  TrophyContainer,
  TrophyStyled,
} from "./styles";

const styles = {
  dialogPaper: {
    minHeight: "80vh",
    maxHeight: "80vh",
  },
};

export const Home = ({ classes }: any) => {
  const [openModal, setOpenModal] = useState(false);

  const handleClickBet = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <OverlayBackgroundStyled>
      <Navbar>
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
      </Navbar>
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
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginTop: "2vh",
                marginLeft: "1vw",
              }}
            >
              <MainText type="Bold" style={{ fontSize: "15px" }}>
                Confirmar aposta
              </MainText>
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
                  justifyContent: "flex-start",
                  width: "100%",
                  alignItems: "flex-start",
                }}
              >
                <MainText type="Bold" style={{ fontSize: "15px" }}>
                  Gustavo Luppi Siloto
                </MainText>
                <div style={{ display: "flex" }}>
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
                <div style={{ display: "flex" }}>
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
                <div style={{ display: "flex" }}>
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
                <div style={{ display: "flex" }}>
                  <MainText type="Medium" style={{ fontSize: "14px" }}>
                    Valor da cobertura:
                  </MainText>
                </div>
                <input
                  style={{
                    borderRadius: "8px",
                    border: "0px",
                    backgroundColor: "#D9D9D9",
                    height: "3vh",
                    width: "7vw",
                    outline: "none",
                  }}
                ></input>
              </div>
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
