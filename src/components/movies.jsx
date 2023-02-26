import { Component } from "react";
import { getMovies } from "../services/fakeMovieService"

import Like from "./common/like";

class Movies extends Component {
  state = {
    movies: getMovies(),
    filtered: getMovies()
  }

  handleDelete = movie => {
    const filtered = this.state.filtered.filter(m => m._id !== movie._id);
    this.setState({ filtered });
  }

  handleLike = movie => {
    const filtered = [...this.state.filtered];
    const index = filtered.indexOf(movie);
    filtered[index] = { ...filtered[index] };
    filtered[index].liked = !filtered[index].liked;
    this.setState({ filtered })
  }

  render() {
    const { filtered } = this.state;

    if (filtered.length === 0)
      return <p>There are no movies in the database</p>

    return (
      <>
        <p>Showing {filtered.length} in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.filtered.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><Like
                  onToggleLike={() => this.handleLike(movie)}
                  liked={movie.liked}
                />
                </td>
                <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table >
      </>
    );
  }
}

export default Movies;