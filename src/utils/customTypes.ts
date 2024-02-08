import { ChangeEventHandler, MouseEventHandler } from "react";

export interface IButton{
    buttonTitle: string,
    onClick: MouseEventHandler<HTMLButtonElement>
}

export enum EButtonAction {
    ADD = 'add',
    REMOVE = 'remove'
}

export type ButtonAction = {
    action : EButtonAction
}

export interface ITrack {
    trackTitle: string,
    trackArtist: string,
    trackAlbum: string
}
