import React from 'react'
import Movie from '../components/Movie'

export default function MoviePage({
    movie
}) {
    return (
        <div>
        {
            !!movie ? (
                <Movie { ...movie } />
            ) : (
                <p>Loading…</p>
            )
        }
        </div>
    )
}