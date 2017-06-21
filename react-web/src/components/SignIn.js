import React from 'react'

function submitSignIn(event, onSignIn) {
    event.preventDefault()

    const button = event.target
    const form = button.form
    const elements = form.elements
    const email = elements['email'].value
    const password = elements['password'].value
    
    onSignIn({ email, password })
}

export default function SignIn({
  currentUser,
  onSignIn
}) {
    return (
        <div>
        {
            currentUser ? (
                'Signed in!'
            ) : (
                <form>
                    <label>
                        {'Email: '}
                        <input name='email' />
                    </label>
                    <label>
                        {'Password: '}
                        <input name='password' />
                    </label>
                    <button type='submit' onClick={ (event) => submitSignIn(event, onSignIn) }>Sign In</button>
                </form>
            )
        }
        </div>
    )
}