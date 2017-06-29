import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CreatePersonForm from '../components/People/CreatePersonForm'
import PeopleList from '../components/People/PeopleList'
import Person from '../components/People/Person'

const PeoplePage = ({
    people,
    onCreatePerson
}) => (
    <div>
        <CreatePersonForm onCreate={ onCreatePerson } />
    {
        !!people ? (
            <Switch>
                <Route path='/people/:id' render={
                    ({ match }) => {
                        const id = match.params.id
                        // Pull the specific person out from the array
                        const person = people.find((person) => person._id === id)
                        // Render error message if not person found
                        if (!person) {
                            return (
                                <p>Person with id "{ id }" not found</p>
                            )
                        }

                        // Render the individual person
                        return (
                            <Person { ...person } />
                        )
                    }
                } />
                <Route path='/people' render={
                    () => (
                        <PeopleList items={ people } />
                    )
                } />
            </Switch>
        ) : (
            'Loading people'
        )
    }
    </div>
)

export default PeoplePage
