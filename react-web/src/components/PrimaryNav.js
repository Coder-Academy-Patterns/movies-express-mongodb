import React from 'react'
import { Link } from 'react-router-dom'

export default function PrimaryNav() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/movies'>Movies</Link>
            <Link to='/signin'>Sign in</Link>
        </nav>
    )
}