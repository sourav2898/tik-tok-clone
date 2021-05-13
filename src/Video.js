import React, {useRef,useState}from 'react'
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';

const Video = ({likes, shares, description, messages, channel , song, url}) => {

    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const videoPlay = () => {
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }else{
            videoRef.current.play();
            setPlaying(true);
        }
    }
    return (
        <div className="video">
            <video
             className="video_player"
             loop
             onClick = {videoPlay}
             ref={videoRef}
             src={url}
            ></video>
            <VideoFooter
             channel = {channel}
             song = {song}
             description = {description}
             />
             <VideoSideBar 
                 likes = {likes}
                 shares = {shares}
                 messages = {messages}
             />
        </div>
    )
}

export default Video
