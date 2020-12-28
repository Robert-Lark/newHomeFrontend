/* eslint-disable */
import {graphql} from "gatsby";
import React, {useState, useRef} from "react";
import "../styles/app.scss";
//Import Components
import Player from "../components/Player";
import Song from "../components/Song";
import Library from "../components/Library";
import Nav from "../components/Nav";
import Interview from "../components/Interview";
//Util
import {playAudio} from "../components/util";
//DESTRUCTURE DATA 
function QuietCast({data}) {
  console.log(data.content.nodes[1]);
  //Import data
  function mixData(content) {
    return content.map((mix) => ({
      name: mix.name,
      cover: mix.cover.asset.fluid,
      artist: mix.artist,
      audio: mix.audio.asset.url,
      color: mix.color,
      id: mix.id,
      active: mix.active,
      ...mix,
    }));
  }
  //Ref
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(mixData(data.content.nodes));
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
    volume: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const percentage = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
      animationPercentage: percentage,
      volume: e.target.volume,
    });
  };
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    playAudio(isPlaying, audioRef);
    return;
  };
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song isPlaying={isPlaying} currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        isPlaying={isPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <Interview current={currentSong} />
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio.asset.url}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}
export default QuietCast;

export const query = graphql`
  query InterviewInfo {
    content: allSanityInterview {
      nodes {
        active
        id
        cat
        artist
        name
        color
        audio {
          asset {
            url
          }
        }
        tracklist
        description
        answer1
        answer10
        answer11
        answer12
        answer13
        answer14
        answer15
        answer16
        answer17
        answer18
        answer19
        answer2
        answer3
        answer4
        answer5
        answer6
        answer7
        answer8
        answer9
        question1
        question10
        question11
        question12
        question13
        question14
        question15
        question16
        question17
        question18
        question19
        question2
        question3
        question4
        question5
        question6
        question7
        question8
        question9
        style1
        style10
        style11
        style12
        style13
        style14
        style15
        style16
        style17
        style18
        style19
        style2
        style3
        style4
        style5
        style6
        style7
        style8
        style9
        imageOfArtist {
          asset {
            fixed(width: 200, height: 200) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        cover {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        i1 {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        i2 {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        i3 {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        i4 {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        i5 {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        i6 {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        i7 {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        i8 {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        i9 {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        i10 {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        i11 {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        i12 {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        i13 {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        i14 {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        i15 {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        i16 {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        i17 {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        i18 {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        i19 {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        albumArt {
        asset {
          fluid(maxHeight: 1000){
            ...GatsbySanityImageFluid
          }
        }
      }
      }
    }
  }
`;
