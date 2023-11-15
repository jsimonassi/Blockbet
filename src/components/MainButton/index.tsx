import React from "react";
import { ButtonContainerStyled } from "./styles";

interface IMainButtonProps {
    text: string;
    style?: React.CSSProperties;
    onClick: () => void;
    type: "Primary" | "Secondary";
}


export const MainButton = ({text, style, onClick, type = "Primary"}: IMainButtonProps) => {

	return (
		<ButtonContainerStyled type={type} style={style} onClick={onClick}>
			{text}
		</ButtonContainerStyled>
	);

};