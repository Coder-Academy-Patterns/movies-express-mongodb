import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({
    signedIn = false
}) => (
    <nav>
        <NavLink exact to='/' activeClassName='active'>Home</NavLink>
        {
            signedIn ? [
                <NavLink key='profile' to='/profile'  activeClassName='active'>Profile</NavLink>
            ] : [
                <NavLink key='signin' to='/signin'  activeClassName='active'>Sign In</NavLink>,
                <NavLink key='join' to='/join' activeClassName='active'>Sign Up</NavLink>
            ]
        }
        <NavLink to='/movies'  activeClassName='active'>Movies</NavLink>
        <NavLink to='/people'  activeClassName='active'>People</NavLink>
    </nav>
)
