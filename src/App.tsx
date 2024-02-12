import './App.css';
import Search from './Components/Search/Search';
import Results from './Components/SearchResults/Results';
import Playlist from './Components/Playlist/Playlist';
import { ITrack } from './utils/customTypes';

function App() {
  let mockTracks: Array<ITrack> = [
    {id: 1, trackArtist: 'Layla', trackAlbum: 'The chonk', trackTitle:'I am a chonkster'},
    {id: 1, trackArtist: 'Layla', trackAlbum: 'The chonk', trackTitle:'I am an eater'},
    {id: 1, trackArtist: 'Layla', trackAlbum: 'The chonk', trackTitle:'Little Chan'}
]
  return (
    <div className="App">
      <header>
        <h1>Jammming</h1>
      </header>
      <body>
        <Search />
        <div>
          <Results tracks={mockTracks}/>
          <Playlist />
        </div>
      </body>
    </div>
  );
}

export default App;
