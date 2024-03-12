import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CiRepeat } from "react-icons/ci";
import NextBtn from './components/NextBtn';
import PrevBtn from './components/PrevBtn';
import PlayPauseBtn from './components/PlayPauseBtn';

import audios from './constants/audios';

function App() {
  const [currSongIdx, setCurrIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [currTime, setCurrTime] = useState(0);
  const [repeatMode, setRepeatMode] = useState(false);

  const songRef = useRef(null);

  const handleNextSong = () => {
    const newIdx = (currSongIdx + 1) % audios.length
    setCurrIdx(newIdx);
    localStorage.setItem('currSongIdx', newIdx);
  };

  const handlePrevSong = () => {
    const newIdx = (currSongIdx - 1 + audios.length) % audios.length;
    setCurrIdx(newIdx);
    localStorage.setItem('currSongIdx', newIdx);
  };

  const handleTimeUpdate = () => {
    if (songRef.current) {
      setCurrTime(songRef.current.currentTime);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('currSongIdx') != null) {
      setCurrIdx(parseInt(localStorage.getItem('currSongIdx')));
    }

    const playAudio = () => {
      if (songRef.current && isPaused) {
        songRef.current.pause();
        setIsPaused(true)
      } else if (songRef.current) {
        songRef.current.currentTime = 0;
        songRef.current.play().catch(error => {
          console.error('Failed to play audio:', error);
        });
        setIsPaused(false);
      }
    };
    
    const handleSongEnd = () => {
      if(repeatMode){
        songRef.current.currentTime = 0;
        songRef.current.play();
      }else{
      const newIdx = (currSongIdx + 1) % audios.length
      setCurrIdx(newIdx);
      localStorage.setItem('currSongIdx', newIdx);
    };
    }
    const audioElement = document.getElementById('audio_element');
    if (!audioElement) {
      console.error('Audio element not found');
      return;
    }
  
    audioElement.addEventListener('loadedmetadata', (e) => {
      songRef.current = e.target;
      playAudio();
    });

    audioElement.addEventListener('ended', handleSongEnd);
  
    // Cleanup
    return () => {
      audioElement.removeEventListener('loadedmetadata', playAudio);
      audioElement.removeEventListener('ended', handleSongEnd);
    };
  }, [currSongIdx, isPaused, repeatMode]);
  
  const handleRepeatMode = () => {
    setRepeatMode(!repeatMode);
  };
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
          <div className='repeat-container'>
          <p>Modi Ji! 🔥</p>
          <button  className='repeat-btn' onClick={handleRepeatMode}>
            <CiRepeat color={repeatMode ? 'red' : 'black'} />
          </button>
          </div>
         
          <audio src={audios[currSongIdx].src} id='audio_element' onTimeUpdate={handleTimeUpdate}/>
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
