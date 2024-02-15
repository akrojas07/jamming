import { ChangeEvent, Dispatch, FormEvent, MouseEvent, SetStateAction, useContext, useState } from "react";
import { EButtonAction, PlaylistType, IPlaylist, ITrack } from "../../utils/customTypes";
import Track from "../Track/Track";
import TrackButton from "../common/TrackButton/TrackButton";
import { TracksContext } from "../../App";

export default function Playlist({setPlaylistTracks} : IPlaylist){
    let playlistTracks = useContext(TracksContext)

    const [playlist, setPlayList] = useState<PlaylistType>({
        playlistName: '',
        tracks: playlistTracks!
    })

    function handleInputOnChange(e: ChangeEvent<HTMLInputElement>){
        setPlayList({
            ...playlist,
            playlistName: e.target.value
        })
    }

    function handleRemoveOnClick(e: MouseEvent<HTMLButtonElement>, trackId: number){
        setPlaylistTracks(tracks => {
            return tracks!.filter(track => track.id !== trackId)
        })
        alert(`${e.target} I was clicked to remove`)
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        // TODO: push playlist to spotify
        setPlayList({
            ...playlist,
            tracks: playlistTracks!
        })
        return(alert(`${playlist.playlistName} playlist created!`))
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder={'Playlist Name'} onChange={handleInputOnChange} required/>
            {playlistTracks && playlistTracks.map(track => {
                return(
                    <div key={track.id}>
                        <Track id={track.id} trackTitle={track.trackTitle} trackAlbum={track.trackAlbum} trackArtist={track.trackArtist}/>
                        <TrackButton action={EButtonAction.REMOVE} onClick={e => handleRemoveOnClick(e, track.id)}/>
                    </div>
                )
            })}
            <button type="submit">Save to Spotify </button>
        </form>
    )
}
