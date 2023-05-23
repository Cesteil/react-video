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
    case "SET_SEARCHED_VIDEO":
      let searchString = action.payload;
      let videoArrayCopy = state.videos;
      videoArrayCopy = videoArrayCopy.filter(x => x.snippet.title.includes(searchString))
      return {...state, videos: videoArrayCopy}
    default:
      return state;
  }
}

const initialState = {
  videos:[],
  selectedVideo:null,
  searchedVideo:null
}

function App() {
  const [state, dispatch] = 
    useReducer(reducer, initialState);
  
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
      <NavBar dispatch={dispatch}/>
      <section className="content-container">
        <VideoPlayer selectedVideo={state.selectedVideo}/>
        <VideoList videos={state.videos} dispatch={dispatch}/>
      </section>
    </div>
  );
}

export default App;
