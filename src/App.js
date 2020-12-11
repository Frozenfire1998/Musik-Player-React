import React, { useState, useRef } from "react";
//import style
import './styles/app.scss';
//import Components
import Nav from './components/Nav'
import Player from './components/Player';
import Song from './components/Song';
import Librery from "./components/Librery";
//import util
import data from './util';



function App() {
  // Ref
  const audioRef = useRef(null);
  //state
  const [songs, setSong] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [songInfo, setSongInfo] = useState({ currentTime: 0, duration: 0 });
  const [LibreryStatus, setLibreryStatus] = useState(false);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration })
  }
  return (
    <div className="App">
      <Nav LibreryStatus={LibreryStatus} setLibreryStatus={setLibreryStatus} />
      <Song currentSong={currentSong} />
      <Player audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
      <Librery audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSong={setSong}
        LibreryStatus={LibreryStatus}
      />
      <audio onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
