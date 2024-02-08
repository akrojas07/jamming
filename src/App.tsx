import './App.css';
import Search from './Components/Search/Search';
import Results from './Components/SearchResults/Results';
import Playlist from './Components/Playlist/Playlist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
      </header>
      <body>
        <Search />
        <div>
          <Results />
          <Playlist />
        </div>
      </body>
    </div>
  );
}

export default App;
