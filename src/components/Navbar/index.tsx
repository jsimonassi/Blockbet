import React, { useEffect, useState } from "react";
import {
  ExpandableInfosStyled,
  LogoStyled,
  NavbarProfile,
  NavbarStyled,
} from "./styles";
import { CreateBetButton } from "../../pages/Home/styles";
import { MainText } from "../MainText";
import { useNavigate } from "react-router-dom";
import { CONSTANTS } from "../../constants";
import { ReactComponent as ProfileIcon } from "../../assets/images/profile.svg";
import { CircularProgress, Menu, MenuItem } from "@material-ui/core";
import { useSessionContext } from "../../contexts/Session";
import { AddCashModal } from "./components/AddCashModal";
import { BlockchainService } from "../../services/blockchain";
import { MetaMaskUser } from "../../types/User";
import { MainButton } from "../MainButton";
import { useTheme } from "styled-components";

enum AvailableActions {
  BUY_COINS = "Comprar Fire Coins",
  REDEEM_COINS = "Resgatar Fire Coins",
  LOGOUT = "Logout",
  HISTORY = "Histórico de apostas"
}

export const Navbar = () => {
  const navigate = useNavigate();
  const currentTheme = useTheme();
  const { logout, currentSession, updateCurrentUser } = useSessionContext();
  const [addCashModalIsOpen, setAddCashModalIsOpen] = useState(false);
  const [loadingBalance, setLoadingBalance] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      refreshBalance();
    }, 5000);

    return () => {
      clearInterval(intervalRef);
    };
  }, []);

  const refreshBalance = () => {
    setLoadingBalance(true);
    BlockchainService.getBalance(currentSession?.address ?? "").then((balance) => {
      updateCurrentUser({
        ...currentSession,
        balance
      } as MetaMaskUser);
    }).finally(() => {
      setTimeout(() => {
        setLoadingBalance(false);
      }, 1000);
    });
  };

  const handleOpenDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseDropdown = () => {
    setAnchorEl(null);
  };

  const performAction = (action: AvailableActions) => {

    switch (action) {
      case AvailableActions.BUY_COINS:
        setAddCashModalIsOpen(true);
        break;
      case AvailableActions.REDEEM_COINS:
        // navigate(CONSTANTS.ROUTES.REDEEM_COINS);
        break;
      case AvailableActions.HISTORY:
        navigate(CONSTANTS.ROUTES.HISTORY);
        break;
      case AvailableActions.LOGOUT:
        logout();
        break;
    }
    handleCloseDropdown();
  };

  return (
    <NavbarStyled>
      <AddCashModal isOpen={addCashModalIsOpen} address={currentSession?.address ?? ""} handleClose={() => setAddCashModalIsOpen(false)} requestUpdateBalance={refreshBalance} />
      <ExpandableInfosStyled onClick={() => navigate(CONSTANTS.ROUTES.HOME)}>
        <LogoStyled src={require("../../assets/images/logo.png")} alt="Logo" />
      </ExpandableInfosStyled>
      <NavbarProfile>
        { loadingBalance && <CircularProgress
          style={{ color: currentTheme.palette.primaryColor, width: "20px", height: "20px" }}
        />}
        <MainText type="Medium" align="center">
          FireCoins: {currentSession?.balance ?? 0}
        </MainText>
        <MainButton type="Primary" onClick={() => navigate(CONSTANTS.ROUTES.CREATE_BET)} text="Criar aposta" />
        <div>
          <ProfileIcon
            style={{ width: "50px", height: "50px", cursor: "pointer" }}
            onClick={handleOpenDropdown}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseDropdown}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            style={{ marginTop: "50px" }}
          >
            <MenuItem onClick={() => performAction(AvailableActions.BUY_COINS)}>Comprar Fire Coins</MenuItem>
            <MenuItem onClick={() => performAction(AvailableActions.REDEEM_COINS)}>Resgatar Fire Coins</MenuItem>
            <MenuItem onClick={() => performAction(AvailableActions.HISTORY)}>Histórico de Apostas</MenuItem>
            <MenuItem onClick={() => performAction(AvailableActions.LOGOUT)}>Logout</MenuItem>
          </Menu>

        </div>
      </NavbarProfile>
    </NavbarStyled>
  );
};
