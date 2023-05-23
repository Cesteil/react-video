import './App.css';
import NavBar from './NavBar';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import videoData from './videoData';
import {useReducer, useEffect} from 'react';

function App() {

  const videos = [];
  const selectedVideo = '';
  const [state,dispatch] = useReducer(reducer,selectedVideo);

  function reducer(state,action){
    switch (action.type){
      case 'SET_VIDEO':
        return state.selectedVideo;
      default :
        return console.log('failure')
    }
  }

  function fetchVideos() {
    return videoData;
  }

  return (
    <div className="App">
      <NavBar />
      <section className="content-container">
        <VideoPlayer selectedVideo={null}/>
        <VideoList videos={fetchVideos()} onClick={() => dispatch({type: 'SET_VIDEO'})}/>
      </section>
    </div>
  );
}

export default App;
