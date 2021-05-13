import React, {useState} from 'react'
import './VideoSideBar.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';

const VideoSideBar = ({likes, shares, messages}) => {

    const [liked, setLiked] = useState(false);

    return (
        <div className="videoSideBar">
            <div className="videoSideBarContainer">
            {
                !liked 
                ? 
                <FavoriteBorderIcon fontSize="large" onClick={e => setLiked(true)} />
                : 
                <FavoriteIcon fontSize="large" onClick={e => setLiked(false)}/>
            }
                <p>{
                    liked ? likes+1 : likes
                }</p>
            </div>
            <div className="videoSideBarContainer">
                <CommentIcon fontSize="large" />
                <p>{messages}</p>
            </div>
            <div className="videoSideBarContainer">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSideBar
