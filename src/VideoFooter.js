import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import Ticker from "react-ticker";

const VideoFooter = ({channel="", song="", description=""}) => {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <h3>{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter_ticker">
                    <MusicNoteIcon className="videoFooter_icon" />
                    <Ticker className="ticker" mode="smooth">
                    {({index}) => (
                        <>
                            <p>{song}</p>
                        </>    
                    )}
                    </Ticker>
                </div>
            </div>
            <img 
                className="videoFooter_record"
                src="https://image.flaticon.com/icons/png/512/26/26554.png"
                alt=""
            />
        </div>
    )
}

export default VideoFooter
