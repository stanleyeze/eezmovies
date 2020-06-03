import React, { Component } from "react";
import { fetchVideo, fetchRelatedItems } from "../actions/movies";
import { connect } from "react-redux";
import history from "../history";
import _ from "lodash";

import CardHorizontal from "./utils/CardHorizontal";

class WatchMovie extends Component {
  async componentDidMount() {
    const path = history.location.pathname;
    var pathSplit = _.split(path, "/");

    const { fetchVideo, video, fetchRelatedItems, movies } = this.props;
    if (!video.results) fetchVideo(pathSplit[2]);
    fetchRelatedItems([], pathSplit[2], 1);

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
  render() {
    const { video, movies } = this.props;
    const newMovies = { ...movies };

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
                <div className="col s2">
                  <i class="small material-icons center-align">arrow_back</i>
                </div>
                <div className="col s8">Like counts details every here</div>
                <div className="col s2">Random stuff</div>
              </div>
            </div>
          </section>

          <section className="movie_video-related white-text">
            <div className="row">
              <div className="container">
                <div className="movie_video-related_header">
                  <div class="switch">
                    <span>Related Movies here </span>
                    <label>
                      <input type="checkbox" />
                      <span class="lever"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="movie_video-related_content">
            <section className="search_result-grid">
              <div className="row ">
                <div className="container">
                  {newMovies.results &&
                  Object.keys(newMovies.results).length !== 0
                    ? newMovies.results.map((result) => {
                        return (
                          <div class="col s6 m4 l3">
                            <CardHorizontal
                              handleFetchVideo={this.handleFetchVideo}
                              result={result}
                            />
                          </div>
                        );
                      })
                    : "No moview is found!!"}
                </div>
              </div>
            </section>
          </div>
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
  };
};
export default connect(mapStateToProps, {
  fetchVideo,
  fetchRelatedItems,
})(WatchMovie);
