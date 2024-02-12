import { ITrack } from "../../utils/customTypes";

export default function Track({id, trackAlbum, trackArtist, trackTitle}: ITrack){
    return(
        <div key={id}>
            <h3>{trackTitle}</h3>
            <p>{trackArtist} | {trackAlbum}</p>
        </div>
    )
}
