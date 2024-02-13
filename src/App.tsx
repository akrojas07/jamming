import './App.css';
import Search from './Components/Search/Search';
import Results from './Components/SearchResults/Results';
import Playlist from './Components/Playlist/Playlist';
import { ITrack } from './utils/customTypes';
import { useState } from 'react';
// inputs and buttons should have same styling

function App() {
  let mockTracks: Array<ITrack> = [
    {id: 1, trackArtist: 'Layla', trackAlbum: 'The chonk', trackTitle:'I am a chonkster'},
    {id: 1, trackArtist: 'Layla', trackAlbum: 'The chonk', trackTitle:'I am an eater'},
    {id: 1, trackArtist: 'Layla', trackAlbum: 'The chonk', trackTitle:'Little Chan'}
  ]

  const [playlistName, setPlaylistName] = useState('')
  const [playList, setPlayList] = useState<Array<ITrack>>([])

  return (
    <div className='App'>
      <header className='header'>
        <h1>Jammming</h1>
      </header>
      <body>
        <Search />
        <div className='playlistandresults'> 
          <Results tracks={mockTracks}/>
          <Playlist setPlayList={setPlayList} setPlaylistName={setPlaylistName} tracks={playList}/>
        </div>
      </body>
    </div>
  );
}

export default App;
