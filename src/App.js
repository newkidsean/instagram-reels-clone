import React, { useEffect, useState } from 'react';
import './App.css';
import VideoCard from './VideoCard';
import db from "./firebase";

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    // App component will run ONCE when it loads,
    // and never again. like name, age, etc..
    db.collection('reels').onSnapshot(snapshot => (
      // snapshot.docs 는 firebase collection 안에 들어있는 모든 정보를
      // 배열로 가지고 오는 기능을 하는 코드
      setReels(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])
  // 긁어온 데이타를 여기 넣어준 빈 배열에 넣는 듯

  return (
    <div className="app">
      <h1>Let's begin!</h1>

      <div className="app__top">
      {/* image at the top */}
      <img
        className="app__log"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
        alt=""
        />
        <h1>Reels</h1>
      {/* Reels text */}
      </div>

      

      <div className="app__videos">
        {/* container of app__video(scroll) */}
      {reels.map(({channel, avatarSrc, song, url, likes, shares}) => (
        
      <VideoCard 
      avatarSrc={avatarSrc}
      channel={channel}
      likes={likes}
      shares={shares} 
      song={song}
      url={url}
      />
      
      ))}
      </div>
    </div>
  );
}

export default App;
