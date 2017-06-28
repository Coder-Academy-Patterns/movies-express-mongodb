import React from 'react'
import CreateMovieForm from '../components/CreateMovieForm'
import MoviesList from '../components/MoviesList'

export default function MoviesPage({
    movies,
    onCreateMovie
}) {
    return (
        <div>
            <CreateMovieForm onCreate={ onCreateMovie } />
            {
                !!movies ? (
                    <MoviesList items={ movies } />
                ) : (
                    'Loading movies…'
                )
            }
        </div>
    )
}