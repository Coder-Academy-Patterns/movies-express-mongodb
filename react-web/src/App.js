import React, { Component } from 'react'
import './App.css'
import MoviesList from './components/MoviesList'

class App extends Component {
  

  render() {
    return (
      <main>
        <MoviesList items={
          [
            { _id: 'abc', title: 'Title and the Furious 2', yearReleased: 2007 },
            { _id: 'def', title: 'Example', yearReleased: 2009 }
          ]
        } />
      </main>
    )
  }
}

export default App
