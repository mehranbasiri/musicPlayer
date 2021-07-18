import React from "react";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1>Music</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        لیست
        <MusicNoteIcon />
      </button>
    </nav>
  );
};

export default Nav;
