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
    id: number,
    trackTitle: string,
    trackArtist: string,
    trackAlbum: string
}

export interface ITrackList{
    tracks: Array<ITrack>
}
