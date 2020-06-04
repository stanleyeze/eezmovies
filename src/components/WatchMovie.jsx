import React, { Component } from "react";
import { fetchVideo, fetchRelatedItems } from "../actions/movies";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from "react-redux";
import history from "../history";
import _ from "lodash";

import MovieGrid from "./utils/MovieGrid";

class WatchMovie extends Component {
  async componentDidMount() {
    const path = history.location.pathname;
    var pathSplit = _.split(path, "/");

    const { fetchVideo, video, fetchRelatedItems, movies } = this.props;
    if (!video.results) fetchVideo(pathSplit[2]);
    fetchRelatedItems([], pathSplit[2], 1);

    M.Tabs.init(this.WatchMovie);
    // //event listener
    // document.addEventListener("scroll", () => {
    //   const scrolable =
    //     document.documentElement.scrollHeight - window.innerHeight;
    //   const scrolled = window.scrollY;

    //   if (scrolable === scrolled) {
    //     const { fetchRelatedItems, movies } = this.props;
    //     const { results, page, total_pages } = movies;
    //     if (page !== total_pages)
    //       fetchRelatedItems(results, pathSplit[2], page + 1);
    //   }
    // });
  }

  handleFetchVideo = (id) => {
    this.props.fetchVideo(id);
  };
  handleShowMore = () => {
    const { movies, fetchRelatedItems } = this.props;
    const { results, page } = movies;
    const intPage = parseInt(page);
    const path = history.location.pathname;
    var pathSplit = _.split(path, "/");
    fetchRelatedItems(results, pathSplit[2], intPage + 1);
  };

  handleBack = () => {
    history.goBack();
  };
  render() {
    const { video, movies, loader } = this.props;
    const newMovies = { ...movies };
    console.log(video.id);

    if (newMovies.results) {
      const movieWithId = newMovies.results.filter(
        (movie) => movie.id === "1255"
      );

      console.log(movieWithId);
    }

    if (video.results) {
      const newVideo = { ...video.results[0] };
      const src = `https://www.youtube.com/embed/${newVideo.key}`;
      return (
        <React.Fragment>
          <section className="movie_video-video">
            <div class="video-container">
              <iframe
                width="853"
                height="480"
                src={src}
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </section>
          <section className="movie_video-desc white-text">
            <div className="row">
              <div className="container">
                <div className="col s2 center-align movie_video-desc_back">
                  <i onClick={this.handleBack} class="small material-icons">
                    arrow_back
                  </i>
                </div>
                <div className="col s8 center-align movie_video-desc_details">
                  <ul className="movie_video-desc_details-ul">
                    <li>
                      <span>{newVideo.site}</span>
                    </li>
                    <li>{newVideo.name}</li>
                    <li>
                      {newVideo.size} <span>MiB</span>
                    </li>

                    <li>
                      <i class="material-icons">thumb_up</i>20
                    </li>
                  </ul>
                </div>
                <div className="col s2 center-align movie_video-desc_others">
                  <i class="material-icons">more_vert</i>
                </div>
              </div>
            </div>
          </section>
          <div className="row">
            <div className="container">
              <h5 className="white-text">Related Movie</h5>
            </div>
          </div>

          {Object.keys(newMovies.results).length !== 0 ? (
            <MovieGrid
              newMovies={newMovies}
              handleShowMore={this.handleShowMore}
              loader={loader}
              handleFetchVideo={this.handleFetchVideo}
            />
          ) : (
            <p className="white-text">"No related movies found"</p>
          )}
        </React.Fragment>
      );
    } else {
      return "Loading...";
    }
  }
}

const mapStateToProps = (state) => {
  return {
    video: state.video,
    movies: state.movies,
    loader: state.loader,
  };
};
export default connect(mapStateToProps, {
  fetchVideo,
  fetchRelatedItems,
})(WatchMovie);

//https://stackoverflow.com/questions/55069297/materializecss-tabs-are-not-working-with-react-npm-import
