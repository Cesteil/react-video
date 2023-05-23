import dispatch from "./App.js"

function VideoListItem({ video }) {
  
  function handleClick(e){
    console.log(e)
    // dispatch({
    //   type:"SET_VIDEO",
    //   selectedVideo:
    // })
  }
  
  return (
    <div className="video-list-item"  onClick={handleClick}>
      <header>
        <img src={video.snippet.thumbnails.default.url} className="video-list-item-thumbnail"></img>
      </header>
      <section>
        <p className="video-list-item-title">{video.snippet.title}</p>
        <p className="video-list-item-channel">{video.snippet.channelTitle}</p>
      </section>
    </div>
  )
}

export default VideoListItem;