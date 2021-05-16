import {useState, useEffect,useRef} from 'react';
import './App.css';
import Video from './Video.js';
import db from './firebase';
import { CircularProgress } from '@material-ui/core';

function App() {

  const [videos, setVideos] = useState([]);
  const [loading,isLoading] = useState(true);
  const [scrolled,setScrolled] = useState(false);
  const ref = useRef();
  useEffect(() => {
    db.collection('videos').onSnapshot( snapshot => {
      console.log(snapshot.docs)
      setVideos(snapshot.docs.map(doc => doc.data()));
      isLoading(false);
    })
  },[])

  const onScroll = () => {
    setScrolled(true);
  }

  return (
    <div className="app">
      {
        loading ? <CircularProgress /> :
        <div className="app_videos" ref={ref} onScroll={onScroll}>
        {
          videos.map(({likes, shares, description, messages, channel , song, url}, index) => {
            return <Video 
                      key = {index}
                      url = {url}
                      shares = {shares}
                      messages = {messages}
                      likes = {likes}
                      channel = {channel}
                      song = {song}
                      description = {description}
                      scrolled={scrolled}
                      setScrolled={setScrolled}
                    />
          })
        }
        </div>
      }
    </div>
  );
}

export default App;
