
function NavBar({dispatch}) {
  
  function searchVideo(e) {
    e.preventDefault();
    const action = {
      type: "SET_SEARCHED_VIDEO",
      payload: e.target.search.value
    }
    dispatch(action);
  }

  return (
    <div className="app-nav">
      <h1>SF Video</h1>
      <form onSubmit={searchVideo}>
        <label htmlFor="search">
          Search 
        </label>
        <input name="search" type="text" ></input>
        <input type="submit" />
      </form>
    </div>
  )
}

export default NavBar;