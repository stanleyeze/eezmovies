import React, { Component } from "react";
import { fetchVideo, fetchRelatedItems } from "../actions/movies";
import { loginModalClose } from "../actions/common";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from "react-redux";
import history from "../history";
import _ from "lodash";

import MovieGrid from "./utils/MovieGrid";
import LoginModal from "./utils/LoginModal";

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

  handleCloseModal = () => {
    this.props.loginModalClose();
  };

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
          <section className="movie_video-desc blue-grey darken-4">
            <div className="row">
              <div className="container">
                <div className="col s2 center-align movie_video-desc_back">
                  <i onClick={this.handleBack} className="small material-icons">
                    arrow_back
                  </i>
                </div>
                <div className="col s8 center-align movie_video-desc_details">
                  <ul className="movie_video-desc_details-ul">
                    <li className="center-items">
                      <strong>
                        <span>Favourite</span>
                      </strong>
                      <i className="material-icons">favorite_border</i>
                    </li>
                    <li className="center-items">
                      <strong>Size</strong> <span>{newVideo.size}MiB</span>
                    </li>

                    <li className="center-items">
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
            <div className="row">
              <div className="container">
                <p className="white-text">
                  <em>"0 Item(s) found!"</em>
                </p>
              </div>
            </div>
          )}
          <LoginModal
            open={loader.login_modal_open}
            handleCloseModal={this.handleCloseModal}
          />
        </React.Fragment>
      );
    } else {
      return (
        <section-loading>
          <div className="row prelder">
            <div className="container">
              <div className="col s12 col-preloader">
                <div class="preloader-wrapper big active">
                  <div class="spinner-layer spinner-blue">
                    <div class="circle-clipper left">
                      <div class="circle"></div>
                    </div>
                    <div class="gap-patch">
                      <div class="circle"></div>
                    </div>
                    <div class="circle-clipper right">
                      <div class="circle"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section-loading>
      );
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
  loginModalClose,
})(WatchMovie);

//https://stackoverflow.com/questions/55069297/materializecss-tabs-are-not-working-with-react-npm-import
