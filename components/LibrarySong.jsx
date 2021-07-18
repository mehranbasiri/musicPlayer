import React from "react";

const LibrarySong = ({
  song,
  songs,
  setcurrentSong,
  id,
  audioRef,
  isplaying,
  setsongs,
}) => {
  const songSelectHandler = async () => {
    const selectSong = songs.filter((state) => state.id === id);
    await setcurrentSong(selectSong[0]);

    //check in the song play
    if (isplaying) audioRef.current.play();
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : " "} `}
    >
      <img alt={song.name} src={song.cover} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};
export default LibrarySong;
