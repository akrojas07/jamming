import { ChangeEventHandler, MouseEventHandler } from "react";

export interface ISearchBar {
    handleSearch: ChangeEventHandler<HTMLInputElement>
}

export interface IButton{
    buttonTitle: string,
    onClick: MouseEventHandler<HTMLButtonElement>
}
