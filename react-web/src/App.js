import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css'
import MoviesList from './components/MoviesList'
import SignInForm from './components/SignInForm'
import * as authAPI from './api/auth'

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
      <Router>
        <main>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/signin'>Sign In</Link>
            <Link to='/movies'>Movies</Link>
          </nav>
          { !!error && <p>{ error.message }</p> }

          <Route exact path='/' render={
            () => (
              <h1>Home</h1>
            )
          } />
          <Route path='/signin' render={
            () => (
              <div>
              {
                !!token ? (
                  <p>Welcome!</p>
                ) : (
                  <SignInForm onSignIn={ this.handleSignIn } />
                )
              }
              </div>
            )
          } />
          <Route path='/movies' render={
            () => (
              <div>
              {
                !!movies ? (
                  <MoviesList items={ movies } />
                ) : (
                  'Loading movies…'
                )
              }
              </div>
            )
          } />
        </main>
      </Router>
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
