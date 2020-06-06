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

    const { fetchVideo, video, fetchRelatedItems } = this.props;
    if (!video.results) fetchVideo(pathSplit[2]);
    fetchRelatedItems([], pathSplit[2], 1);

    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
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

  handleShowDetails = () => {};

  handleBack = () => {
    history.goBack();
  };
  render() {
    const { video, movies, loader } = this.props;
    const newMovies = { ...movies };

    if (newMovies.results) {
      // const movieWithId = newMovies.results.filter(
      //   (movie) => movie.id === "1255"
      // );
    }

    if (video.results) {
      const newVideo = { ...video.results[0] };
      const src = `https://www.youtube.com/embed/${newVideo.key}`;
      return (
        <React.Fragment>
          <section className="movie_video-video">
            <div className="video-container">
              <iframe
                title={video.id}
                width="853"
                height="480"
                src={src}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </section>
          <section className="movie_video-desc white-text">
            <div className="row">
              <div className="container">
                <div className="col s2 center-align movie_video-desc_back">
                  <i onClick={this.handleBack} className="small material-icons">
                    arrow_back
                  </i>
                </div>
                <div className="col s8 center-align movie_video-desc_details">
                  <ul className="movie_video-desc_details-ul">
                    <li>{newVideo.name}</li>
                    <li>
                      {newVideo.size} <span>MiB</span>
                    </li>

                    <li>
                      <i className="material-icons">thumb_up</i>20
                    </li>
                  </ul>
                </div>
                <div className="col s2 center-align movie_video-desc_others">
                  <a
                    className="waves-effect waves-light btn modal-trigger"
                    href="#modal1"
                  >
                    <i className="material-icons">more_vert</i>
                  </a>
                </div>

                <div id="modal1" className="modal">
                  <div className="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                  </div>
                  <div className="modal-footer">
                    <a
                      href="#!"
                      className="modal-close waves-effect waves-green btn-flat"
                    >
                      Agree
                    </a>
                  </div>
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
