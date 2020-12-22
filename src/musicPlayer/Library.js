import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
	songs,
	setCurrentSong,
	audioRef,
	isPlaying,
	setSongs,
	libraryStatus,
}) => {
	return (
		<div className={`library ${libraryStatus ? "active-library" : ""}`}>
			<h2 className="library-title" >Library</h2>
			<div className="library-songs">
				{songs.slice(0).reverse().map((song) => (
					<LibrarySong
						song={song}
						setCurrentSong={setCurrentSong}
						songs={songs}
						id={song.id}
						key={song.id}
						audioRef={audioRef}
						isPlaying={isPlaying}
						setSongs={setSongs}
					/>
				))}
			</div>
		</div>
	);
};

export default Library;
