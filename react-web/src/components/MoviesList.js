import React from 'react'
import Movie from './Movie'

export default function MoviesList({
  items
}) {
  return (
    <div>
    {
      items.map(item => (
        <Movie
          key={ item._id }
          { ...item }
          showLink
        />
      ))
    }
    </div>
  )
}