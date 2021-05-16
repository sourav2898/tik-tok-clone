import React, {useEffect, useRef,useState}from 'react'
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const Video = ({likes, shares, description, messages, channel , song, url,scrolled,setScrolled}) => {

    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    // setScrolled(false);
    const videoPlay = () => {
        if(playing){
            videoRef.current.pause();
            setScrolled(false);
            setPlaying(false);
        }else{
            videoRef.current.play();
            setScrolled(false);
            setPlaying(true);
        }
    }

    useEffect(() => {
            videoRef.current.pause();
            setPlaying(false);
    },[scrolled])

    return (
        <div className="video">
            <div className="playButton">
            {
                !playing 
                ?
                <PlayCircleOutlineIcon style={{fontSize : "100px", color: "#fff"}} />
                : 
                null
            }
            </div>
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
