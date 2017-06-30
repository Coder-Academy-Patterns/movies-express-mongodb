import React from 'react'

export default function ErrorMessage({
  error
}) {

  let message = error.message

  if (error.response) {
    const status = error.response.status
    if (status === 401) {
      message = 'You must be logged in to access this.'
    }
  }

  return (
    <p style={{ color: 'red' }}>
      { message }
    </p>
  )
}