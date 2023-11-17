import React from "react";
import { useTheme } from "styled-components";

interface IMainTextProps {
  type: "Light" | "Medium" | "Bold";
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const MainText = ({ type, children, style }: IMainTextProps) => {
  const currentTheme = useTheme();

  const getCommonStyle = (): React.CSSProperties => {
    return {
      color: currentTheme.palette.textPrimary,
      textAlign: "center",
    };
  };

  switch (type) {
    case "Light":
      return (
        <p style={{ ...getCommonStyle(), fontFamily: "Light", ...style }}>
          {children}
        </p>
      );
    case "Medium":
      return (
        <p style={{ ...getCommonStyle(), fontFamily: "Medium", ...style }}>
          {children}
        </p>
      );
    default:
    case "Bold":
      return (
        <p style={{ ...getCommonStyle(), fontFamily: "Bold", ...style }}>
          {children}
        </p>
      );
  }
};
