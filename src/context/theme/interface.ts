import { ReactNode } from "react";

export interface ITheme {
  title: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;

    black: string;
    white: string;
    gray: string;

    success: string;
    info: string;
    warning: string;
  };
}

export interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
}

export interface IThemeProvider{
  children : ReactNode
}
