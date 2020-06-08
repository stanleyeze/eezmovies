import React from "react";
import CardHorizontal from "./CardHorizontal";
import history from "../../history";

{
  /* <ReactCSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
              transitionAppear={true}
              transitionAppearTimeout={1000}
            ></ReactCSSTransitionGroup> */
}

const MovieGrid = ({
  newMovies,
  handleShowMore,
  loader,
  handleFetchVideo,
  handleSearch,
}) => {
  console.log(history.location.pathname);
  return (
    <React.Fragment>
      <section className="search_result-grid">
        <div className="row ">
          <div className="container">
            {newMovies.results && Object.keys(newMovies.results).length !== 0
              ? newMovies.results.map((result) => {
                  return (
                    <CardHorizontal
                      handleFetchVideo={handleFetchVideo}
                      result={result}
                      key={result.id}
                    />
                  );
                })
              : "No moview is found!!"}
          </div>
        </div>
        <div className="row">
          <div className="container">
            <center>
              {loader && loader.loading ? (
                <div className="progress">
                  <div className="indeterminate"></div>
                </div>
              ) : (
                ""
              )}
              {newMovies.total_pages !== 0 ? (
                <button
                  className="btn white black-text"
                  onClick={handleShowMore}
                >
                  Show More ...
                </button>
              ) : (
                ""
              )}
            </center>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MovieGrid;
