import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
    <nav>
        <NavLink exact to='/' activeClassName='active'>Home</NavLink>
        <NavLink to='/signin'  activeClassName='active'>Sign In</NavLink>
        <NavLink to='/signup'  activeClassName='active'>Sign Up</NavLink>
        <NavLink to='/movies'  activeClassName='active'>Movies</NavLink>
    </nav>
)
