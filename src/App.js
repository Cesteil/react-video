import './App.css';
import NavBar from './NavBar';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import videoData from './videoData';
import {useReducer, useEffect} from "react";



function App() {
  const videos = [];
  const selectedVideo = '';
  const [state, dispatch] = 
    useReducer(reducer, selectedVideo);
  
  function reducer(prevVideo, action) {
    switch (action.type) {
      case "SET_VIDEO":
        return {videoId: action.payload}
      default:
        return prevVideo;
    }
  }
  
  // function handleVideoClick() {
  //   dispatch({type: ''});
  // }

  function fetchVideos() {
    return videoData;
  }

  return (
    <div className="App">
      <NavBar />
      <section className="content-container">
        <VideoPlayer selectedVideo={null}/>
        <VideoList videos={fetchVideos()}/>
      </section>
    </div>
  );
}

export default App;
