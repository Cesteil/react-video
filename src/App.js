import './App.css';
import NavBar from './NavBar';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import videoData from './videoData';
import {useReducer, useEffect} from "react";

function reducer(state, action) {
  switch (action.type) {
    case "SET_VIDEOS":
     return {...state, videos: action.payload};
    case "SET_SELECTED_VIDEO":
      return {...state, selectedVideo: action.payload}
    default:
      return state;
  }
}

const initialState = {
  videos:[],
  selectedVideo:null
}

function App() {
  const [state, dispatch] = 
    useReducer(reducer, initialState);
  
  console.log(state);

  useEffect(() => {
    const action = {
      type: "SET_VIDEOS",
      payload: fetchVideos(),
    }
    dispatch(action)
  },[])

  function fetchVideos() {
    return videoData;
  }

  return (
    <div className="App">
      <NavBar />
      <section className="content-container">
        <VideoPlayer selectedVideo={state.selectedVideo}/>
        <VideoList videos={state.videos} dispatch={dispatch}/>
      </section>
    </div>
  );
}

export default App;
