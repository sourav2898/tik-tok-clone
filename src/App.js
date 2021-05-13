import {useState, useEffect} from 'react';
import './App.css';
import Video from './Video.js';
import db from './firebase';

function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection('videos').onSnapshot( snapshot => {
      console.log(snapshot.docs)
      setVideos(snapshot.docs.map(doc => doc.data()))
    })
  },[])

  return (
    <div className="app">
        <div className="app_videos">
        {
          videos.map(({likes, shares, description, messages, channel , song, url}) => {
            return <Video 
            url = {url}
            shares = {shares}
            messages = {messages}
            likes = {likes}
            channel = {channel}
            song = {song}
            description = {description}
            />
          })
        }
          
        </div>
    </div>
  );
}

export default App;
