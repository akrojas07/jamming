import { EButtonAction, ITrack } from "../../utils/customTypes";
import Track from "../Track/Track";
import TrackButton from "../common/TrackButton/TrackButton";

export default function TrackList(){
    //map tracks 
    // mock track details
    let mockTracks: Array<ITrack> = []

    return(
        mockTracks.map(mockTrack => {
            return(
                <>
                    <Track trackTitle={mockTrack.trackTitle} trackAlbum={mockTrack.trackAlbum} trackArtist={mockTrack.trackArtist}/>
                    <TrackButton action={EButtonAction.ADD}/>
                </>
            )
        })
    )
}
