import React from 'react'
import { Link } from 'react-router-dom'

export default function Movie({
  _id,
  title,
  yearReleased,
  description,
  writers,
  directors,
  cast,
  crew
}) {
  return (
    <article>
      <h2>
        <Link to={ `/movies/${_id}` }>
          { title }
        </Link>
        {' '}
        <small>({ yearReleased })</small>
      </h2>
    </article>
  )
}