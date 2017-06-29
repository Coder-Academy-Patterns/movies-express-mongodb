import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import decodeJWT from 'jwt-decode'
import './App.css'
import PrimaryNav from './components/PrimaryNav'
import ErrorMessage from './components/ErrorMessage'
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import PeoplePage from './pages/PeoplePage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import ProfilePage from './pages/ProfilePage'
import { setAPIToken } from './api/init'
import * as authAPI from './api/auth'
import * as moviesAPI from './api/movies'
import * as peopleAPI from './api/people'

class App extends Component {
  // Initial state
  state = {
    error: null,
    token: null,
    movies: null, // Null means not loaded yet
    people: null,
  }

  loadPromises = {}

  setToken = (token) => {
    setAPIToken(token)
    // Reset loaded data
    this.loadPromises = {}
    this.setState({ token })
  }

  setError = (error) => {
    if (error.response && error.response.data && error.response.data.error) {
      error = error.response.data.error
    }
    this.setState({ error })
  }

  loadPeople = () => {
    // Only load once
    if (this.loadPromises.listPeople) {
      return
    }

    // Load people
    this.loadPromises.listPeople = peopleAPI.list()
      .then(people => {
        // Happens some time in the future
        this.setState({ people, error: null })
      })
      .catch(error => {
        this.setError(error)
      })
  }

  handleSignIn = ({ email, password }) => {
    authAPI.signIn({ email, password })
      .then(json => {
        this.setToken(json.token)
      })
      .catch(error => {
        this.setError(error)
      })
  }

  handleSignUp = ({ email, password }) => {
    authAPI.register({ email, password })
      .then(json => {
        this.setToken(json.token)
      })
      .catch(error => {
        this.setError(error)
      })
  }

  handleSignOut = () => {
    this.setState({ token: null })
  }

  handleCreateMovie = (newMovie) => {
    this.setState(({ movies }) => ({
      movies: movies.concat(newMovie)
    }))

    moviesAPI.create(newMovie)
  }

  handleCreatePerson = (newPerson) => {
    this.setState(({ people }) => ({
      people: people.concat(newPerson)
    }))

    peopleAPI.create(newPerson)
  }

  render() {
    const { error, token, movies, people } = this.state
    const userInfo = !!token ? decodeJWT(token) : null

    return (
      <Router>
        <main>
          <PrimaryNav signedIn={ !!token } />
          { !!error && <ErrorMessage error={ error } /> }

          <Switch>
            <Route exact path='/' component={ HomePage } />
            <Route path='/signin' render={
              () => (
                <SignInPage token={ token } onSignIn={ this.handleSignIn } />
              )
            } />
            <Route path='/join' render={
              () => (
                <SignUpPage token={ token } onSignUp={ this.handleSignUp } />
              )
            } />
            <Route path='/profile' render={
              () => (
                <ProfilePage userInfo={ userInfo } onSignOut={ this.handleSignOut } />
              )
            } />
            <Route path='/movies' render={
              () => (
                <MoviesPage movies={ movies } />
              )
            } />
            <Route path='/people' render={
              () => {
                this.loadPeople()

                return (
                  <PeoplePage people={ people } onCreatePerson={ this.handleCreatePerson } />
                )
              }
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
    // Load movies: asychronous
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
