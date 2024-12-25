import React, { useEffect, useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

interface VidName {
  name: string;
}

const YouTubePlayer: React.FC<VidName> = ({name}) => {
      
      const [width, setWidth] = useState<number>(1100);
      
        useEffect(() => {
          const initWidth = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
          setWidth(initWidth);
        }, []);
      
        const resize = () => {
          const w = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
          setWidth(w);
        };
      
        window.onresize = resize;

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: width>400?(width*0.4).toString():(width*0.6).toString(),
    width: width>400?(width*0.6).toString():(width*0.9).toString(),
    playerVars: {
      autoplay: 0,
    },
  };

  return <YouTube videoId={name} opts={opts} onReady={onPlayerReady} />;
}

export default YouTubePlayer;
