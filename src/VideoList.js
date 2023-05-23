import VideoListItem from "./VideoListItem";

function VideoList({ videos, dispatch }) {

  return (
    <div className="video-list">
      {
        videos.map((videoData) => <VideoListItem dispatch={dispatch} video={videoData}/>)
      }
    </div>
  )
}

export default VideoList;