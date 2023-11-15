import "styled-components";
import { AppTheme } from "../AppTheme";

declare module "styled-components" {
  export type DefaultTheme = AppTheme
}
