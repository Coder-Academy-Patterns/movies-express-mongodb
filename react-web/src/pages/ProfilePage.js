import React from 'react'
import { Redirect } from 'react-router-dom'
import Profile from '../components/Profile'

export default function ProfilePage({
    userInfo
}) {
    return (
        <div>
          <h1>Profile</h1>
          {
            !userInfo ? (
              <Redirect to='/signin' />
            ) : (
              <Profile userInfo={ userInfo } />
            )
          }
        </div>
    )
}