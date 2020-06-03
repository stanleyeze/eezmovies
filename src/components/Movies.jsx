import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { fetchAll, fetchVideo } from "../actions/index";
import CardHorizontal from "./utils/CardHorizontal";

class Movies extends Component {
  async componentDidMount() {
    console.log(this.props.match.params.category, "did mount!");
    this.props.fetchAll([], this.props.match.params.category, 1);
  }

  handleShowMore = () => {
    const { movies, match } = this.props;
    const { results, page } = movies;
    const intPage = parseInt(page);
    this.props.fetchAll(results, match.params.category, intPage + 1);
  };

  handleFetchVideo = (id) => {
    this.props.fetchVideo(id);
  };

  render() {
    const { movies, loader } = this.props;
    const newMovies = { ...movies };
    return (
      <React.Fragment>
        <section className="search_result-grid">
          <div className="row ">
            <div className="container">
              {newMovies.results && Object.keys(newMovies.results).length !== 0
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
              <center>
                {loader && loader.loading ? (
                  <div class="progress">
                    <div class="indeterminate"></div>
                  </div>
                ) : (
                  ""
                )}
                <button onClick={this.handleShowMore}>Show More</button>
              </center>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const newForm = { ...state.form };
  if (state.movies && state.movies.results) {
    return {
      searchForm: newForm,
      movies: { ...state.movies },
      loader: state.loader,
    };
  } else {
    return {};
  }
};

export default connect(mapStateToProps, { fetchAll, fetchVideo })(
  reduxForm({ form: "searchSearchForm" })(Movies)
);
