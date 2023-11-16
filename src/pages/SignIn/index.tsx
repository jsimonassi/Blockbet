import React from "react";
import { ContainerStyled, ExpandableInfosStyled, InfosContainerStyled, LeftSideStyled, LogoStyled, OverlayBackgroundStyled, RightSideStyled, ViniImageStyled } from "./styles";
import { MainButton, MainText } from "../../components";
import { useSessionContext } from "../../contexts/Session";


export const SignIn = () => {

	const sessionContext = useSessionContext();

	return (
		<ContainerStyled>
			<OverlayBackgroundStyled />
			<InfosContainerStyled>
				<ExpandableInfosStyled>
					<LogoStyled src={require("../../assets/images/logo.png")} alt="Logo" />
					<MainText type="Light" style={{ fontSize: "22px" }}>Aposte com confiança, aposte com blockchain.</MainText>
				</ExpandableInfosStyled>
				<MainButton
					text="Entrar com metamask"
					onClick={() => { sessionContext.setCurrentSession("Xablau"); }}
					type="Secondary"
					style={{ width: "40%", marginTop: "50px" }}
				/>
			</InfosContainerStyled>
			<LeftSideStyled />
			<RightSideStyled>
				<ViniImageStyled src={require("../../assets/images/vini_profile.png")} alt="Vinícius Júnior" />
			</RightSideStyled>
		</ContainerStyled>
	);
};