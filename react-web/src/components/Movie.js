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
  crew,
  showLink = false
}) {
  return (
    <article>
      <h2>
        { showLink ? (
            <Link to={ `/movies/${_id}` }>
              { title }
            </Link>
          ) : (
            title
          )
        }
        {' '}
        <small>({ yearReleased })</small>
      </h2>
    </article>
  )
}