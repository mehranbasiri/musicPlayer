import React, { useState, useRef } from "react";
import "./styles/App.scss";
import Player from "./components/player";
import Song from "./components/Song";
import data from "./ListSong";
import Library from "./components/Library";
import Nav from "../src/components/Nav";

function App() {
  const audioRef = useRef(null);
  const [songs, setsongs] = useState(data);
  const [currentSong, setcurrentSong] = useState(songs[0]);
  const [isplaying, setIsPlaying] = useState(false);
  //State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  //Time and duration
  const TimeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //calculate percentage

    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animationPercentage = Math.round(
      (roundedCurrent / roundedDuration) * 100
    );

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage,
    });
  };
  const songEndhandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setcurrentSong(songs[(currentIndex + 1) % songs.length]);

    if (isplaying) audioRef.current.play();
  };
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        isplaying={isplaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setsongs={setsongs}
        songs={songs}
        setcurrentSong={setcurrentSong}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setcurrentSong={setcurrentSong}
        isplaying={isplaying}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={TimeUpdateHandler}
        onLoadedMetadata={TimeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndhandler}
      ></audio>
    </div>
  );
}

export default App;
