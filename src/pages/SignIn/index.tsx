/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  ContainerStyled,
  ExpandableInfosStyled,
  InfosContainerStyled,
  LeftSideStyled,
  LogoStyled,
  OverlayBackgroundStyled,
  RightSideStyled,
  ViniImageStyled,
} from "./styles";
import { MainButton, MainText } from "../../components";
import { useSessionContext } from "../../contexts/Session";
import { ethers } from "ethers";
import { MetaMaskUser } from "../../types/User";
import { ModalMetamaskNotFound } from "./Components";

export const SignIn = () => {
  const sessionContext = useSessionContext();
  const [notFoundModal, setNotFoundModal] = useState(false);

  const getbalance = (address: string) => {
    // Requesting balance method
    (window as any).ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance: string) => {
        // Setting balance
        const user: MetaMaskUser = {
          address,
          balance: Number(ethers.utils.formatEther(balance)),
        };
        console.log(balance, "balance");
        console.log(ethers.utils.formatEther(balance), "SALDO CONTA");
        sessionContext.setCurrentSession(user);
      });
  };

  const handlerLogin = () => {
    // Asking if metamask is already present or not
    if ((window as any).ethereum) {
      // res[0] for fetching a first wallet
      (window as any).ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res: string[]) => getbalance(res[0]));
    } else {
      setNotFoundModal(true);
    }
  };

  return (
    <ContainerStyled>
      <OverlayBackgroundStyled />
      <InfosContainerStyled>
        <ExpandableInfosStyled>
          <LogoStyled
            src={require("../../assets/images/logo.png")}
            alt="Logo"
          />
          <MainText type="Light" style={{ fontSize: "22px" }}>
            Aposte com confiança, aposte com blockchain.
          </MainText>
        </ExpandableInfosStyled>
        <MainButton
          text="Entrar com metamask"
          onClick={handlerLogin}
          type="Secondary"
          style={{ width: "40%", marginTop: "50px" }}
        />
      </InfosContainerStyled>
      <LeftSideStyled />
      <RightSideStyled>
        <ViniImageStyled
          src={require("../../assets/images/vini_profile.png")}
          alt="Vinícius Júnior"
        />
      </RightSideStyled>
      <ModalMetamaskNotFound
        visible={notFoundModal}
        onClose={() => setNotFoundModal(false)}
        onInstallMetamask={() => window.open("https://metamask.io/download/")}
        />
    </ContainerStyled>
  );
};
