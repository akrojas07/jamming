import { ITrackList } from "../../utils/customTypes";
import TrackList from "../Tracklist/Tracklist";

export default function Results({tracks}: ITrackList){
    return(
        <>
            <h2> Results </h2>
            <TrackList tracks={tracks}/>
        </>
    )
    
}
