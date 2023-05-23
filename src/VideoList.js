import VideoListItem from "./VideoListItem";

function VideoList({ videos, selected }) {

  return (
    <div className="video-list">
      {
        videos.map((videoData) => <VideoListItem video={videoData}/>)
      }
    </div>
  )
}

export default VideoList;