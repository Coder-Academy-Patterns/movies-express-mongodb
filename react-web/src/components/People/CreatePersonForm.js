import React from 'react'
import Field from '../Field'
import readAndClearForm from '../readAndClearForm'

function submitCreate(event, onCreate) {
    event.preventDefault()

    const form = event.target
    const personValues = readAndClearForm(form)
    onCreate(personValues)
}

export default function CreatePersonForm({
    onCreate
}) {
  return (
    <form onSubmit={ (event) => submitCreate(event, onCreate) }>
        <Field label='First name' name='firstName' />
        <Field label='Last name' name='lastName' />
        <button type='submit'>Create Person</button>
    </form>
  )
}