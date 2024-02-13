import { EButtonAction, ITrackList } from "../../utils/customTypes";
import Track from "../Track/Track";
import TrackButton from "../common/TrackButton/TrackButton";

//TODO: update button so it's on the same line as the track
export default function TrackList({tracks}: ITrackList){
    return(
        <>
            {tracks.map(track => {
                return(
                    <div key={track.id}>
                        <Track  id={track.id} trackTitle={track.trackTitle} trackAlbum={track.trackAlbum} trackArtist={track.trackArtist}/>
                        <TrackButton action={EButtonAction.ADD}/> 
                    </div>
                )
            })}
        </>
    )
}
