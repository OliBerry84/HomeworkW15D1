import React, { Component } from 'react';
import MovieList from '../components/MovieList.js'

class MovieBox extends Component{
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { id: 1, title: "Avengers: Infinity War" , weekend: "£30.1m" , gross: "£30.1m", weeks: "1"},
        { id: 2, title: "The Guernsey Literary and Potato Peel Pie Society", weekend: "£1.0m", gross: "£3.0m", weeks: "2"},
        { id: 3, title: "A Quiet Place", weekend: "£0.9m", gross: "£9.9m", weeks: "4"},
        { id: 4, title: "Rampage", weekend: "£0.7m", gross: "£7.8m", weeks: "3"},
        { id: 5, title: "Peter Rabbit", weekend: "£0.6m", gross: "£40.4m", weeks: "7"},
        { id: 6, title: "The Greatest Showman", weekend: "£0.3m", gross: "£45.7m", weeks: "18"},
        { id: 7, title: "Truth or Dare", weekend: "£0.2m", gross: "£2.3m", weeks: "3"},
        { id: 8, title: "Blade Runner", weekend: "£0.2m", gross: "£2.1m", weeks: "6"},
        { id: 9, title: "Ready Player One", weekend: "£0.2m", gross: "£15.9m", weeks: "5"},
        { id: 10, title: "Black Panther", weekend: "£0.2m", gross: "£50.9m", weeks: "11"}
      ]
    };

  }

  render() {
    return (
      <div className = "movie-box">
        <h1>UK Top 10 Box Office</h1>
        <MovieList data = { this.state.data }/>
      </div>
    );
  }
}

export default MovieBox;
