import {
  Dialog,
  DialogContent,
} from "@material-ui/core";
import React, { useState } from "react";
import { MainButton, MainText } from "../../../../components";
import {
  InputValueContainer,
} from "./styles";
import { THEMES } from "../../../../constants/theme";
import Web3 from "web3";
import { EtherPortal__factory } from "@cartesi/rollups";
import toast from "react-hot-toast";
import { useTheme } from "styled-components";


interface CreateBetModalProps {
  isOpen: boolean;
  handleClose: () => void;
  requestUpdateBalance: () => void;
  address: string;
}

export const AddCashModal = ({
  isOpen,
  handleClose,
  requestUpdateBalance,
  address,
}: CreateBetModalProps) => {

  const [value, setValue] = useState("");
  const currentTheme = useTheme();
  const web3 = new Web3((window as any).ethereum);

  const handleAddCash = async (cash: number) => {
    handleClose();
    const toastRef = toast.loading("Adicionando saldo...");
    try {
      if (cash <= 0) return;

      const web3Contract = new web3.eth.Contract(
        EtherPortal__factory.abi,
        (window as any).env.LOCALHOST_ETHER_PORTAL_ADDRESS
      );

      const etherValue = web3.utils.toWei(value.toString(), "ether");
      await web3Contract.methods.depositEther((window as any).env.LOCALHOST_DAPP_ADDRESS, "0x").send({
        from: address,
        value: etherValue,
      });
      toast.success("Saldo adicionado com sucesso");
    } catch (e) {
      toast.error("Erro ao adicionar saldo");
      console.log(e);
    } finally {
      toast.dismiss(toastRef);
      requestUpdateBalance();
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        handleClose();
      }}
      PaperProps={{
        style: {
          minHeight: "230px",
          minWidth: "400px",
          borderRadius: "8px",
          justifyContent: "flex-start",
        }
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
          Adicionar saldo
        </MainText>
        <div
          style={{ marginRight: "2%", marginTop: "2%", cursor: "pointer" }}
          onClick={() => {
            handleClose();
          }}
        >
          <MainText
            type="Bold"
            align="end"
            style={{
              fontSize: "22px",
              color: currentTheme.palette.icons,
            }}
          >
            X
          </MainText>
        </div>
      </div>
      <DialogContent
        style={{
          backgroundColor: currentTheme.palette.surface1,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >

        <InputValueContainer>
          <MainText type="Bold" style={{ fontSize: "15px" }}>
            Valor (ETH):
          </MainText>
          <input
            value={value}
            type="number"
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
        <MainText type="Light" style={{ fontSize: "15px", marginTop: "10px", marginBottom:  "20px" }}>
            Valor aproximado (FireCoins): {web3.utils.toWei(value.toString(), "ether")}
          </MainText>
        <MainButton type="Primary" onClick={() => value !== "" && handleAddCash(Number(value))} text="Adicionar" />
      </DialogContent>
    </Dialog>
  );
};
