import React, {Component} from 'react';

class Movie extends Component {
  render() {
    return(
      <div className = "movie">
        <h2>{this.props.title}</h2>
        <h5>{this.props.children}</h5>
      </div>
    );
  }
}

export default Movie;
