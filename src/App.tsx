import styles from './App.module.css';
import Search from './Components/Search/Search';
import Results from './Components/SearchResults/Results';
import Playlist from './Components/Playlist/Playlist';
import { ITrack } from './utils/customTypes';
import { createContext, useState } from 'react';
// inputs and buttons should have same styling

export const TracksContext = createContext<Array<ITrack> | null>(null)

function App() {
  let mockTracks: Array<ITrack> = [
    {id: 1, trackArtist: 'Layla', trackAlbum: 'The chonk', trackTitle:'I am a chonkster'},
    {id: 2, trackArtist: 'Layla', trackAlbum: 'The chonk', trackTitle:'I am an eater'},
    {id: 3, trackArtist: 'Layla', trackAlbum: 'The chonk', trackTitle:'Little Chan'}
  ]

  const [resultTracks, setResultTracks] = useState<Array<ITrack>>(mockTracks)
  const [playlistTracks, setPlaylistTracks] = useState<Array<ITrack>>(mockTracks)

  return (
    <div className={styles.App}>
      <header className='header'>
        <h1>Jammming</h1>
      </header>
      <body>
        <Search />
        <div className={styles.playlistandresults}> 
          <TracksContext.Provider value={resultTracks!}>
            <Results />
          </TracksContext.Provider>
          <TracksContext.Provider value={playlistTracks!}>
            <Playlist setPlaylistTracks={setPlaylistTracks}/>
          </TracksContext.Provider>
        </div>
      </body>
    </div>
  );
}

export default App;
