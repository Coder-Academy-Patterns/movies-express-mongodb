import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import './App.css'
import PrimaryNav from './components/PrimaryNav'
import MoviesList from './components/MoviesList'
import SignInForm from './components/SignInForm'
import CreateMovieForm from './components/CreateMovieForm'
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import SignInPage from './pages/SignInPage'
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

  handleCreateMovie = (movie) => {
    this.setState(({ movies }) => ({
      movies: [ movie ].concat(movies)
    }))

    moviesAPI.create(movie)
  }

  render() {
    const { error, token, movies } = this.state
    return (
      <Router>
        <main>
          <PrimaryNav />
          { !!error && <p>{ error.message }</p> }
          <Route exact path='/' render={ () => (
            <div>
              <p>Welcome!</p>
            </div>
          ) } />
          <Route path='/movies' render={ () => (
            <div>
              <CreateMovieForm onCreate={ this.handleCreateMovie } />
              {
                !!movies ? (
                  <MoviesList items={ movies } />
                ) : (
                  'Loading movies…'
                )
              }
            </div>
          ) } />
          <Route path='/signin' render={ () => (
            <div>
              {
                !!token ? (
                  <Redirect to='/' />
                ) : (
                  <SignInForm onSignIn={ this.handleSignIn } />
                )
              }
            </div>
          ) } />
        </main>
      </Router>
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
