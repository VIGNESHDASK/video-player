import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoPlayer from './VideoPlayer';

function VideoDetails() {
  const [currentTime, setCurrentTime] = useState(0);
  const [videoCompleted, setVideoCompleted] = useState(false);

  const handleTimeUpdate = (event) => {
    setCurrentTime(event.target.currentTime);
  };

  const handleVideoCompleted = () => {
    setVideoCompleted(true);
  };

  useEffect(() => {
    if (videoCompleted) {
      // Send the video completion data to the backend
      axios.post('/api/video-completed', {
        // videoId: props.videoId,
        currentTime: currentTime
      });
    }
  }, [videoCompleted, currentTime]);

  return (
    <div className='box'>
    <VideoPlayer/>
    </div>
  );
}

export default VideoDetails;
