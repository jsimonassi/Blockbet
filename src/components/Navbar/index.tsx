import React, { useState } from "react";
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
import { Menu, MenuItem } from "@material-ui/core";
import { useSessionContext } from "../../contexts/Session";
import { AddCashModal } from "./components/AddCashModal";

enum AvailableActions {
  BUY_COINS = "Comprar Fire Coins",
  REDEEM_COINS = "Resgatar Fire Coins",
  LOGOUT = "Logout",
}

export const Navbar = () => {
  const navigate = useNavigate();
  const {logout, currentSession} = useSessionContext();
  const [addCashModalIsOpen, setAddCashModalIsOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

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
      case AvailableActions.LOGOUT:
        logout();
        break;
    }
    handleCloseDropdown();
  };

  return (
    <NavbarStyled>
      <AddCashModal isOpen={addCashModalIsOpen} address={currentSession?.address ?? ""} handleClose={() => setAddCashModalIsOpen(false)}/>
      <ExpandableInfosStyled onClick={() => navigate(CONSTANTS.ROUTES.HOME)}>
        <LogoStyled src={require("../../assets/images/logo.png")} alt="Logo" />
      </ExpandableInfosStyled>
      <NavbarProfile>
        <CreateBetButton onClick={() => navigate(CONSTANTS.ROUTES.CREATE_BET)}>
          <MainText type="Medium" align="center">
            Criar Aposta
          </MainText>
        </CreateBetButton>
        <MainText type="Medium" align="center">
            FireCoins: {currentSession?.balance ?? 0}
          </MainText>
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
          >
            <MenuItem onClick={() => performAction(AvailableActions.BUY_COINS)}>Comprar Fire Coins</MenuItem>
            <MenuItem onClick={() => performAction(AvailableActions.REDEEM_COINS)}>Resgatar Fire Coins</MenuItem>
            <MenuItem onClick={() => performAction(AvailableActions.LOGOUT)}>Logout</MenuItem>
          </Menu>

        </div>
      </NavbarProfile>
    </NavbarStyled>
  );
};
