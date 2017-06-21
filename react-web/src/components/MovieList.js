import React from 'react'
import Movie from './Movie'

export default function MovieList({
    items
}) {
    return (
        <div>
        {
            (items.length === 0) ? (
                <p>No movies yet!</p>
            ) : (
                items.map(item => (
                    <Movie key={ item._id }
                        { ...item }
                    />
                ))
            )
        }
        </div>
    )
}