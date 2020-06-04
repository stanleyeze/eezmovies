import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import _ from "lodash";

const CardHorizontal = ({ result, handleFetchVideo }) => {
  // function truncate(str, no_words) {
  //   return str.split(" ").splice(0, no_words).join(" ");
  // }

  const { poster_path, overview, id } = result;
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

    <div class="card mainCard" style={{ height: "20rem" }}>
      <div class="card-image">
        <img
          src={result.poster_path ? picture : "/img/logo5.png"}
          style={{ height: "10rem" }}
        />
        <span class="card-title">Card Title</span>
        <button
          onClick={() => handleFetchVideo(id, result)}
          class="btn-floating halfway-fab waves-effect waves-light red"
        >
          <i class="material-icons">play_arrow</i>
        </button>
      </div>
      <div class="card-content hoverable mainCard_hovers">
        <p style={{ height: "5rem", overflow: "hidden" }}>
          {overview} <span>...</span>
        </p>
        <ul className="card_icons">
          <li>
            <i class="material-icons">thumb_up</i>
            <span red-text>29</span>
          </li>
          <li>
            <i class="material-icons mainCard_hovers-favorite">favorite</i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardHorizontal;
