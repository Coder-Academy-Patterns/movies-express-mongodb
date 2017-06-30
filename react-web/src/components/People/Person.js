import React from 'react'

export default function Person({
  _id,
  firstName,
  lastName
}) {
  return (
    <article>
      <h2>
        { firstName } { lastName }
      </h2>
    </article>
  )
}