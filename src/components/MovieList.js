import React, { Component } from 'react';
import Movie from './Movie.js';

class MovieList extends Component {
  render() {
    const movieNodes = this.props.data.map((movie) => {
      return (
        <Movie title={movie.title} key = {movie.id}>
          Weekend: {movie.weekend},
          Gross: {movie.gross},
          Weeks in the Chart: {movie.weeks}
        </Movie>
      );
    });

    return(
      <div className = "movie-list">
        {movieNodes}
      </div>
    );
  }
}

export default MovieList;
