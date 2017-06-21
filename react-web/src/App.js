import React, { Component } from 'react'
import './App.css'
import MoviesList from './components/MoviesList'

class App extends Component {
  // Initial state
  state = {
    error: null,
    movies: null // Null means not loaded yet
  }

  render() {
    const { error, movies } = this.state
    return (
      <main>
        { !!error && <p>{ error.message }</p> }
        {
          !!movies ? (
            <MoviesList items={ movies } />
          ) : (
            'Loading movies…'
          )
        }
      </main>
    )
  }

  componentDidMount() {
    // Asychronous
    fetch('/movies')
      // Parse JSON response
      .then(res => res.json())
      .then(movies => {
        // Happens some time in the future
        this.setState({ movies })
      })
      .catch(error => {
        this.setState({ error })
      })
  }
}

export default App
