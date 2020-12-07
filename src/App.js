import React, { useState } from "react";
//import style
import './styles/app.scss';
//import Components
import Player from './components/Player';
import Song from './components/Song';
//import util
import data from './util';


function App() {
  //state
  const [songs, setSong] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[4])
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className="App">

      <Song currentSong={currentSong} />
      <Player setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong={currentSong} />

    </div>
  );
}

export default App;
