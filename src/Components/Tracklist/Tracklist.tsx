import { MouseEvent, useContext } from "react";
import { EButtonAction, ITrack } from "../../utils/customTypes";
import Track from "../Track/Track";
import TrackButton from "../common/TrackButton/TrackButton";
import { SearchResultTracksContext } from "../../App";

//TODO: update button so it's on the same line as the track
export default function TrackList(){
    const tracks = useContext(SearchResultTracksContext)
    let tempPlaylist = Array<ITrack>();
    
    //TODO: finish add functionality: 2-15
    function handleAddOnClick(e: MouseEvent<HTMLButtonElement>, trackId: number){
        alert(`${e.target} ${trackId} I was clicked to add`)
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
