import React, { Component } from 'react'
import { signIn } from './api/auth'
import { readDecodedToken } from './api/token'
import * as moviesAPI from './api/movies'
import MovieList from './components/MovieList'
import SignIn from './components/SignIn'

class App extends Component {
  state = {
    error: null,
    currentUser: readDecodedToken(),
    movies: null
  }

  onSignIn = ({ email, password }) => {
    signIn({ email, password })
      .then(() => {
        this.setState({
          currentUser: readDecodedToken(),
          error: null
        })
      })
      .catch(error => {
        this.setState({
          error
        })
      })
  }

  render() {
    const { error, currentUser, movies } = this.state
    return (
      <main>
        <div>
          { error && <p>{ error.message }</p> }
          <SignIn currentUser={ currentUser } onSignIn={ this.onSignIn } />
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
