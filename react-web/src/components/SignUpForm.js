import React from 'react'

const formStyle = {
  display: 'flex',
  flexDirection: 'column'
}

function submitSignUp(event, onSignUp) {
  // Stop usual browser form submission
  event.preventDefault()

  // Get <form>
  const form = event.target
  // Get values from the field
  const email = form.elements['email'].value
  const password = form.elements['password'].value
  // Call the onSignUp function with our values
  onSignUp({ email, password })
}

export default function SignUpForm({
  onSignUp
}) {
  return (
    <form
      onSubmit={ (event) => submitSignUp(event, onSignUp) }
      style={ formStyle }
    >
      <label>
        <span>Email </span>
        <input name='email' />
      </label>
      <label>
        <span>Password </span>
        <input type='password' name='password' />
      </label>
      <button>Sign Up</button>
    </form>
  )
}