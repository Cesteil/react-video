import './App.css';
import NavBar from './NavBar';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import videoData from './videoData';
import {useReducer, useEffect} from "react";



function App() {
  const [state, dispatch] = 
    useReducer(reducer, {videos:fetchVideos(), selectedVideo:''});
  
  console.log(state);

  function reducer(prevVideo, action) {
    switch (action.type) {
      case "SET_VIDEO":
        return {id:{videoId: action.payload}}
      // case "INITIAL_LIST":
      //   return {videos: action.payload}
      default:
        return prevVideo;
    }
  }

  // useEffect(() => {
  //   videosDispatch = fetchVideos()
  // },[])
  
  // function handleVideoClick(e) {
  //   console.log("you clicked a video");
  //   dispatch({
  //     type: 'SET_VIDEO',
  //     videoId: e.target.id.videoId
  //   });
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
