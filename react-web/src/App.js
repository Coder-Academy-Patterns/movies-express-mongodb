import React, { Component } from 'react'
import * as moviesAPI from './api/movies'
import MovieList from './components/MovieList'

class App extends Component {
  state = {
    movies: null
  }

  render() {
    const { movies } = this.state
    return (
      <main>
        <div>
        {
          !!movies ? (
            <MovieList items={ movies } />
          ) : (
            'Loading movies…'
          )
        }
        </div>
      </main>
    )
  }

  componentDidMount() {
    moviesAPI.collection()
      .then(movies => {
        this.setState({ movies })
      })
      .catch(error => {
        this.setState({ error })
      })
  }
}

export default App;
