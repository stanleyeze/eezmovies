import React from "react";
import CardHorizontal from "./CardHorizontal";

const MovieGrid = ({ newMovies, handleShowMore, loader, handleFetchVideo }) => {
  return (
    <React.Fragment>
      <section className="search_result-grid">
        <div className="row ">
          <div className="container">
            {newMovies.results && Object.keys(newMovies.results).length !== 0
              ? newMovies.results.map((result) => {
                  return (
                    <div class="col s6 m4 l3 xl2">
                      <CardHorizontal
                        handleFetchVideo={handleFetchVideo}
                        result={result}
                        key={newMovies.id}
                      />
                    </div>
                  );
                })
              : "No moview is found!!"}
          </div>
        </div>
        <div className="row">
          <center>
            {loader && loader.loading ? (
              <div class="progress">
                <div class="indeterminate"></div>
              </div>
            ) : (
              ""
            )}
            <button onClick={handleShowMore}>Show More</button>
          </center>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MovieGrid;
