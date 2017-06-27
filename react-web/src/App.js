import React, { Component } from 'react'
import './App.css'
import MoviesList from './components/MoviesList'
import SignInForm from './components/SignInForm'
import * as authAPI from './api/auth'
import * as moviesAPI from './api/movies'

class App extends Component {
  // Initial state
  state = {
    error: null,
    token: null,
    movies: null // Null means not loaded yet
  }

  handleSignIn = ({ email, password }) => {
    authAPI.signIn({ email, password })
      .then(json => {
        this.setState({ token: json.token })
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  render() {
    const { error, token, movies } = this.state
    return (
      <main>
        {
          !!token ? (
            <p>Welcome!</p>
          ) : (
            <SignInForm onSignIn={ this.handleSignIn } />
          )
        }
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
    moviesAPI.list()
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
