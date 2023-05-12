'use client';
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const PortfolioItem = ({
  image,
  filePath,
  songName,
  artistName,
  playTrack,
  isPlaying,
}) => {
  const audioRef = useRef(null);
  const [playbackTime, setPlaybackTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.load();
    }
    playTrack(filePath);
  };

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const handleTimeUpdate = () => {
      setPlaybackTime(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audioRef.current.duration);
    };

    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      audioRef.current.removeEventListener(
        'loadedmetadata',
        handleLoadedMetadata
      );
    };
  }, []);

  const handleTimeChange = (e) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = e.target.value;
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className='bg-black relative'>
      <img
        className='w-full max-h-40 md:max-h-full object-cover aspect-square opacity-70'
        src={image}
        alt={`${songName} by ${artistName}`}
      />
      <div className='text-white absolute bottom-0 flex flex-col gap-2 px-8 pb-2 w-full'>
        <div className='pb-4 border-b-2 border-b-white/25'>
          <p className='text-lg font-bold tracking-wider'>{songName}</p>
          <p className='text-sm'>By {artistName}</p>
        </div>
        <div className='flex justify-center'>
          <div onClick={handlePlay}>
            {isPlaying ? (
              <FontAwesomeIcon
                icon={faPauseCircle}
                size='2xl'
                style={{ color: '#f7f7f7' }}
                className='hover:opacity-60 hover:scale-105 duration-500 tranisiton-all'
              />
            ) : (
              <FontAwesomeIcon
                icon={faPlayCircle}
                size='2xl'
                style={{ color: '#f7f7f7' }}
                className='hover:opacity-60 hover:scale-105 duration-300 tranisiton-all'
              />
            )}
          </div>
        </div>
        <div className='flex justify-between gap-4 items-center'>
          <p className='text-s font-bold min-w-[3ch] '>
            {formatTime(playbackTime)}
          </p>
          <input
            type='range'
            min='0'
            max={duration}
            value={playbackTime}
            onChange={handleTimeChange}
            className='audio-length'
          />
          <p className='text-s font-bold'>{formatTime(duration)}</p>
        </div>
        <audio
          ref={audioRef}
          controls
          preload='none'
          controlsList='nodownload'
          className='hidden'>
          <source src={filePath} type='audio/mpeg' />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default PortfolioItem;
