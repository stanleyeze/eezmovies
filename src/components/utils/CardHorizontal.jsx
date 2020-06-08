import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddRemoveFavorite } from "../../actions/movies";
import { loginModalOpen } from "../../actions/common";

class CardHorizontal extends Component {
  //handleAddRemoveFavorite
  handleFavorite = (id) => {
    const { user } = this.props;
    const favourites = { movie_id: id };

    if (user.isSignedIn) {
      this.props.handleAddRemoveFavorite(favourites, user.username);
    } else {
      this.props.loginModalOpen();
    }
  };
  render() {
    const { poster_path, overview, id } = this.props.result;
    const { favouriteItem } = this.props;
    const favourite = favouriteItem.filter(
      (fav) => fav.favourite.movie_id === id
    );

    let classn = "material-icons mainCard_hovers-icons_favorite";

    if (Object.keys(favourite).length !== 0) {
      classn = "material-icons mainCard_hovers-icons_favorite-true";
    }
    const picture = `https://image.tmdb.org/t/p/w500/${poster_path}`; //result.poster_path
    return (
      <div className="col s6 m4 l3 xl2">
        <div
          className="card blue-grey darken-4 mainCard "
          style={{ height: "20rem" }}
        >
          <div className="card-image">
            <img
              alt="movie-dply"
              src={this.props.result.poster_path ? picture : "/img/logo5.png"}
              style={{ height: "10rem" }}
            />
            {/* <span className="card-title">Card Title</span> */}
            <button
              onClick={() => this.props.handleFetchVideo(id, this.props.result)}
              className="btn-floating halfway-fab waves-effect waves-light red"
            >
              <i className="material-icons">play_arrow</i>
            </button>
          </div>
          <div className="card-content hoverable mainCard_hovers">
            <p style={{ height: "5rem", overflow: "hidden" }}>
              {overview} <span>...</span>
            </p>
            <ul className="card_icons mainCard_hovers-icons">
              <li>
                <i className="material-icons">thumb_up</i>
                <span>{this.props.result.vote_average}</span>
              </li>
              <li onClick={() => this.handleFavorite(id)}>
                <i className={classn}>favorite</i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favouriteItem: state.favouriteItem,
    user: state.login,
  };
};

export default connect(mapStateToProps, {
  handleAddRemoveFavorite,
  loginModalOpen,
})(CardHorizontal);
