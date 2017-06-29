import React from 'react'
import { Redirect } from 'react-router-dom'

function secondsUntilTime(expiry) {
    const now = new Date()
    const then = new Date(expiry * 1000)
    return then.getTime() - now.getTime()
}

const ProfilePage = ({
    userInfo,
    onSignOut
}) => (
    <div>
    {
        !userInfo ? (
            <Redirect to='/signin' />
        ) : (
            <div>
                <dl>
                    <dt>Email:</dt>
                    <dd>{ userInfo.email }</dd>
                    <dt>Will sign out in:</dt>
                    <dd>{ secondsUntilTime(userInfo.exp) } seconds</dd>
                </dl>
                <button onClick={ onSignOut }>
                    Sign Out
                </button>
            </div>
        )
    }
    </div>
)

export default ProfilePage
