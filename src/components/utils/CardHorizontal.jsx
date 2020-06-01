import React from "react";

const CardHorizontal = ({ result }) => {
  const { poster_path } = result;
  const picture = `https://image.tmdb.org/t/p/w500/${poster_path}`; //result.poster_path
  return (
    <div class="card horizontal">
      <div class="card-image">
        <img src={result.poster_path ? picture : "/img/logo4.png"} />
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>
            I am a very simple card. I am good at containing small bits of
            information.
          </p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  );
};

export default CardHorizontal;
