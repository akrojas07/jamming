import { Dispatch, MouseEvent, SetStateAction } from "react";

export interface IButton{
    buttonTitle: string,
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

export enum EButtonAction {
    ADD = 'add',
    REMOVE = 'remove'
}

export interface IButtonAction {
    action : EButtonAction,
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
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

export interface IPlaylist {
    setPlaylistTracks: Dispatch<SetStateAction<ITrack[]>>
}

export type PlaylistType = {
    playlistName: string,
    tracks: Array<ITrack>
}
