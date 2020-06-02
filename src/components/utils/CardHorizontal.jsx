import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const CardHorizontal = ({ result, handleFetchVideo }) => {
  const { poster_path, id } = result;
  const picture = `https://image.tmdb.org/t/p/w500/${poster_path}`; //result.poster_path
  const path = `/movie/${id}`;
  return (
    // <div class="card horizontal hoverable" style={{ height: "20rem" }}>
    //   <div class="card-image">
    //     <img src={result.poster_path ? picture : "/img/logo5.png"} />
    //   </div>
    //   <div class="card-stacked">
    //     <div class="card-content">
    //       <center>
    //         <i class="material-icons">thumb_up</i>{" "}
    //         <span>{result.vote_count}</span>
    //       </center>
    //       <center>
    //         <i class="material-icons">timer</i>{" "}
    //         <span>{result.vote_average}</span>
    //       </center>
    //       <center>
    //         Date:
    //         <span>{result.release_date}</span>
    //       </center>
    //     </div>
    //     <Button
    //       class="btn waves-effect deep-orange accent-2"
    //       onClick={() => handleFetchVideo(id)}
    //     >
    //       Watch Now
    //       <i class="material-icons right">send</i>
    //     </Button>
    //   </div>
    // </div>

    <div class="card" style={{ height: "30rem" }}>
      <div class="card-image">
        <img
          src={result.poster_path ? picture : "/img/logo5.png"}
          style={{ height: "20rem" }}
        />
        <span class="card-title">Card Title</span>
        <a
          onClick={() => handleFetchVideo(id)}
          class="btn-floating halfway-fab waves-effect waves-light red"
        >
          <i class="material-icons">play_arrow</i>
        </a>
      </div>
      <div class="card-content hoverable">
        <p style={{ height: "70px", overflow: "hidden" }}>
          {result.overview} <span>...</span>
        </p>
      </div>
    </div>
  );
};

export default CardHorizontal;
