import React, { useState, useRef } from 'react';
import myVideo from "../../assets/videos/allianz_day3.mp4";


function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setPlaying(!playing);
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const handleMute = () => {
    setMuted(!muted);
    videoRef.current.muted = !videoRef.current.muted;
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    videoRef.current.volume = event.target.value;
  };

  return (
    <div className='videoBox'>
      <video
        ref={videoRef}
        src={myVideo}
        controls
        autoPlay={playing}
        muted={muted}
        volume={volume}
        className='box'
      />
      <button onClick={handlePlay}>{playing ? 'Pause' : 'Play'}</button>
      <button onClick={handleMute}>{muted ? 'Unmute' : 'Mute'}</button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />
    </div>
  );
}

export default VideoPlayer;
