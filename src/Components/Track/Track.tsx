import { ITrack } from "../../utils/customTypes";

export default function Track(trackDetails: ITrack){
    return(
        <>
            <h3>{trackDetails.trackTitle}</h3>
            <p>{trackDetails.trackArtist} | {trackDetails.trackAlbum}</p>
        </>
    )
}
