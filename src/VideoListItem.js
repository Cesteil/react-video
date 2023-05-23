import dispatch from "./App.js"

function VideoListItem({ video }) {
  
  function handleClick(e){ 
    let currId = e.currentTarget.attributes.getNamedItem("data-id").value;
    console.log(e.currentTarget.attributes.getNamedItem("data-id").value)
    dispatch({
      type:"SET_VIDEO",
      id:{videoId:currId}
    })
  }
  
  return (
    <div className="video-list-item"  onClick={handleClick} data-id={video.id.videoId}>
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