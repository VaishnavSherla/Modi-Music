import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import NextBtn from './components/NextBtn';
import PrevBtn from './components/PrevBtn';
import PlayPauseBtn from './components/PlayPauseBtn';

import audios from './constants/audios';

function App() {
  const [currSongIdx, setCurrIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [currTime, setCurrTime] = useState(0);
  
  const songRef = useRef(null);

  const handleNextSong = () => {
    setCurrIdx((currSongIdx + 1) % audios.length);
  };

  const handlePrevSong = () => {
    const newIndex = (currSongIdx - 1 + audios.length) % audios.length;
    setCurrIdx(newIndex);
  };

  useEffect(() => {
    const playAudio = () => {
      if (songRef.current) {
        songRef.current.currentTime = 0;
        songRef.current.play().catch(error => {
          console.error('Failed to play audio:', error);
        });
      }
    };

    const handleSongEnd = () => {
      setCurrIdx((currSongIdx + 1) % audios.length);
    };

    const audioElement = window.document
      .getElementById('audio_element');
    audioElement.addEventListener('loadedmetadata', (e) => {
      songRef.current = e.target;
      playAudio();
      setIsPaused(false);
    });
  
    audioElement.addEventListener('ended', handleSongEnd);

    if (!songRef) {
      setIsPaused(false);
    }
    
    // Cleanup
    return () => {
      audioElement.removeEventListener('loadedmetadata', playAudio);
      audioElement.removeEventListener('ended', handleSongEnd);
    };
  }, [currSongIdx]);

  return (
    <div className='root'>
      <div className='container'>
        <div>
          <LazyLoadImage
            src={audios[currSongIdx].img}
            className={`img ${!isPaused ? 'animation-spin' : ''}`}
          />
        </div>

        <div className='song'>
          <h1>{audios[currSongIdx].songName}</h1>
          <p>Modi Ji! 🔥</p>
          <audio src={audios[currSongIdx].src} id='audio_element' onTimeUpdate={() => setCurrTime(songRef.current.currentTime)} />
        </div>

        <div>
          <input value={currTime} type='range' min={0} max={songRef.current?.duration || 0} className='input' onChange={(e) => (songRef.current.currentTime = e.target.value)} />
        </div>

        <div className='controller'>
          <PrevBtn onClick={handlePrevSong} />
          <PlayPauseBtn songRef={songRef} isPaused={isPaused} setIsPaused={setIsPaused} />
          <NextBtn onClick={handleNextSong} />
        </div>
      </div>
    </div>
  );
}

export default App;
