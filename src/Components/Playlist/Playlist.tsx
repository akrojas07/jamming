import { ChangeEvent, FormEvent, MouseEvent } from "react";
import { EButtonAction, IPlaylist } from "../../utils/customTypes";
import Track from "../Track/Track";
import TrackButton from "../common/TrackButton/TrackButton";

export default function Playlist({setPlaylistName, tracks, setPlayList}: IPlaylist){

  // playlist requirements
  // add a name (save the name when playlist is saved)
  // add tracks to the playlist 
  // save locally
  // "save to spotify" button saves the form

    function handleInputOnChange(e: ChangeEvent<HTMLInputElement>){
        setPlaylistName(e.target.value)
    }

    function handleRemoveOnClick(e: MouseEvent<HTMLButtonElement>){
        alert(`${e.target} I was clicked to remove`)
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault()

        return(alert(e.currentTarget))
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder={'Playlist Name'} onChange={handleInputOnChange}/>
            {tracks.map(track => {
                return(
                    <div key={track.id}>
                        <Track id={track.id} trackTitle={track.trackTitle} trackAlbum={track.trackAlbum} trackArtist={track.trackArtist}/>
                        <TrackButton action={EButtonAction.REMOVE} onClick={handleRemoveOnClick}/>
                    </div>
                )
            })}
            <button type="submit">Save to Spotify </button>
        </form>
    )
}
