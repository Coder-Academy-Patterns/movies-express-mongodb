import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css'
import PrimaryNav from './components/PrimaryNav'
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import MoviePage from './pages/MoviePage'
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
          <Route exact path='/' component={ HomePage } />
          <Switch path='/movies'>
            <Route exact path='/movies' render={ () => (
              <MoviesPage
                movies={ movies }
                onCreateMovie={ this.handleCreateMovie }
              />
            ) } />
            <Route path='/movies/:id' render={ ({ match }) => (
              <MoviePage
                movie={ !!movies ? movies.find(movie => movie._id === match.params.id) : null }
              />
            ) } />
          </Switch>
          <Route path='/signin' render={ () => (
            <SignInPage
              token={ token }
              onSignIn={ this.handleSignIn }
            />
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
