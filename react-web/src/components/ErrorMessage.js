import React from 'react'

export default function ErrorMessage({
  error
}) {

  let message = error.message

  if (error.response) {
    const status = error.response.status
    if (status === 401) {
      message = 'You are not authorized to access this.'
    }

    // If the API responded with error information
    const json = error.response.data
    if (json.error && json.error.message) {
      message += ' ' + json.error.message
    }
  }

  return (
    <p style={{ color: 'red' }}>
      { message }
    </p>
  )
}