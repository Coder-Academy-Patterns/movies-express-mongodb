import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MoviesList from '../components/MoviesList'
import Movie from '../components/Movie'

const MoviesPage = ({ movies }) =>
  <div>
    {!!movies
      ? <Switch>
          <Route
            path="/movies/:id"
            render={({ match }) => {
              const id = match.params.id
              // Pull the specific movie out from the array
              const movie = movies.find(movie => movie._id === id)
              // Render error message if not movie found
              if (!movie) {
                return (
                  <p>
                    Movie with id "{id}" not found
                  </p>
                )
              }

              // Render the individual movie
              return <Movie {...movie} />
            }}
          />
          <Route path="/movies" render={() => <MoviesList items={movies} />} />
        </Switch>
      : 'Loading movies…'}
  </div>

export default MoviesPage
