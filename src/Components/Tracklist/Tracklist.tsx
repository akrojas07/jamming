import { MouseEvent, useContext } from "react";
import { EButtonAction, ITrack } from "../../utils/customTypes";
import Track from "../Track/Track";
import TrackButton from "../common/TrackButton/TrackButton";
import { TracksContext } from "../../App";

//TODO: update button so it's on the same line as the track
export default function TrackList(){
    const tracks = useContext(TracksContext)
    let tempPlaylist = Array<ITrack>();
    
    function handleAddOnClick(e: MouseEvent<HTMLButtonElement>, trackId: number){
        alert(`${e.target} ${trackId} I was clicked to add`)
        tempPlaylist.push(tracks![trackId])
    }

    return(
        <>
            {tracks!.map(track => { 
                return(
                    <div key={track.id}>
                        <Track  id={track.id} trackTitle={track.trackTitle} trackAlbum={track.trackAlbum} trackArtist={track.trackArtist}/>
                        <TrackButton action={EButtonAction.ADD} onClick={e => handleAddOnClick(e, track.id)}/> 
                    </div>
                )
            })}
        </>
    )
}
