import React from 'react'
import Person from './Person'

export default function PeopleList({
  items
}) {
  return (
    <div>
    {
      items.map(item => (
        <Person
          key={ item._id }
          { ...item }
        />
      ))
    }
    </div>
  )
}