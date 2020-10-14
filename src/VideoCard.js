import React, { useState, useRef } from 'react';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';
import './VideoCard.css';


function VideoCard({ url, likes, shares, channel, avatarSrc, song }) {
    const [isVideoPlaying, setIsVideoPlaying] = 
    useState(false);
    const videoRef = useRef(null);
    
    const onVideoPress = () => {
        if (isVideoPlaying) {
            // stop
            videoRef.current.pause()
            setIsVideoPlaying(false)
        } else {
            // play
            videoRef.current.play()
            setIsVideoPlaying(true)
        }
    };

    return (
        <div className="videoCard">
            <VideoHeader />
            <video 
            ref={videoRef}
            onClick={onVideoPress}
            className="videoCard__player"
            src={url}
            alt='TG reel video'
            loop={true}
            />
            <VideoFooter 
            channel={channel}
            likes={likes}
            shares={shares}
            avatarSrc={avatarSrc}
            song={song}
            />
            
        </div>
    )
}

export default VideoCard
