import React from 'react';
import LibrerySong from './LibrerySong'

const Librery = ({ LibreryStatus, songs, setCurrentSong, audioRef, isPlaying, setSong }) => {
    return (
        <div className={`librery ${LibreryStatus ? "active-library" : " "}`}>
            <h3>Library</h3>
            <div className="library-songs">
                {songs.map(song => (
                    <LibrerySong
                        songs={songs}
                        setCurrentSong={setCurrentSong}
                        song={song}
                        id={song.id}
                        audioRef={audioRef}
                        isPlaying={isPlaying}
                        setSong={setSong}
                        key={song.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default Librery;