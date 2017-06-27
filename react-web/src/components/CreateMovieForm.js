import React from 'react'
import Field from './Field'
import readAndClearForm from './readAndClearForm'

function submitCreate(event, onCreate) {
    event.preventDefault()

    const form = event.target
    const movieValues = readAndClearForm(form)
    onCreate(movieValues)
}

export default function CreateMovieForm({
    onCreate
}) {
  return (
    <form onSubmit={ (event) => submitCreate(event, onCreate) }>
        <Field label='Title' name='title' />
        <Field label='Year Released' name='yearReleased' />
        <Field label='Description' name='description' />
        <button type='submit'>Create Movie</button>
    </form>
  )
}