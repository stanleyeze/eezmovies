import React from "react";

const CardHorizontal = ({ result, handleFetchVideo }) => {
  function handleFavorite() {
    console.log("yes oo");
  }

  const { poster_path, overview, id } = result;
  const picture = `https://image.tmdb.org/t/p/w500/${poster_path}`; //result.poster_path
  return (
    <div className="col s6 m4 l3 xl2">
      <div className="card mainCard" style={{ height: "20rem" }}>
        <div className="card-image">
          <img
            alt="movie-dply"
            src={result.poster_path ? picture : "/img/logo5.png"}
            style={{ height: "10rem" }}
          />
          {/* <span className="card-title">Card Title</span> */}
          <button
            onClick={() => handleFetchVideo(id, result)}
            className="btn-floating halfway-fab waves-effect waves-light red"
          >
            <i className="material-icons">play_arrow</i>
          </button>
        </div>
        <div className="card-content hoverable mainCard_hovers">
          <p style={{ height: "5rem", overflow: "hidden" }}>
            {overview} <span>...</span>
          </p>
          <ul className="card_icons mainCard_hovers-icons">
            <li>
              <i className="material-icons">thumb_up</i>
              <span>29</span>
            </li>
            <li onClick={handleFavorite}>
              <i className="material-icons mainCard_hovers-icons_favorite">
                favorite
              </i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardHorizontal;
