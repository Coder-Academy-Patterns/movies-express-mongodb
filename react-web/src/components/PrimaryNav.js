import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
    <nav>
        <NavLink exact to='/' activeClassName='active'>Home</NavLink>
        <NavLink to='/signin'  activeClassName='active'>Sign In</NavLink>
        <NavLink to='/join'  activeClassName='active'>Sign Up</NavLink>
        <NavLink to='/profile'  activeClassName='active'>Profile</NavLink>
        <NavLink to='/movies'  activeClassName='active'>Movies</NavLink>
    </nav>
)
