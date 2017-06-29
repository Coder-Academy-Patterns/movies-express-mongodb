import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css'
import PrimaryNav from './components/PrimaryNav'
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import SignInPage from './pages/SignInPage'
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
          <PrimaryNav />
          { !!error && <p>{ error.message }</p> }

          <Switch>
            <Route exact path='/' component={ HomePage } />
            <Route path='/signin' render={
              () => (
                <SignInPage token={ token } onSignIn={ this.handleSignIn } />
              )
            } />
            <Route path='/movies' render={
              () => (
                <MoviesPage movies={ movies } />
              )
            } />
            <Route render={
              ({ location }) => <p>{ location.pathname } not found</p>
            } />
          </Switch>
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
