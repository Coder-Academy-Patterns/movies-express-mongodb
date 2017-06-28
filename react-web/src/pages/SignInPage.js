import React from 'react'
import { Redirect } from 'react-router-dom'
import SignInForm from '../components/SignInForm'

export default function SignInPage({
    token,
    onSignIn
}) {
    return (
        <div>
            {
            !!token ? (
                <Redirect to='/' />
            ) : (
                <SignInForm onSignIn={ onSignIn } />
            )
            }
        </div>
    )
}