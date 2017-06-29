import React from 'react'
import MoviesList from '../components/MoviesList'

const MoviesPage = ({
    movies
}) => (
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

export default MoviesPage