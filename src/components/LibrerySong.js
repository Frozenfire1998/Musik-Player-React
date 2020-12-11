const LibrerySong = ({ song, songs, setCurrentSong, id, audioRef, isPlaying, setSong }) => {
    const songSelectHandle = () => {
        setCurrentSong(song);
        // active state 
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true,
                };
            } else {
                return {
                    ...song,
                    active: false
                }
            };
        });
        setSong(newSongs);
        //ckeck if song is playing
        if (isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then((audio) => {
                    audioRef.current.play();
                });
            }
        }

    }
    return (
        <div onClick={songSelectHandle} className={`library-song ${song.active ? 'selected' : ''}`} >
            <img src={song.cover} alt={song.name} />
            <div className="song-desc">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div >
    );
}

export default LibrerySong;