import { ButtonHTMLAttributes, MouseEventHandler } from "react"

export interface ICommonButtonProp extends ButtonHTMLAttributes<HTMLButtonElement>{
    onClick?: MouseEventHandler<HTMLButtonElement>;
    label: string;
}