import React from 'react'
import numService from '../services/numbers'

const Person = ({ person, persons, setPersons }) => {
    return (
        <div>
            {person.name} {person.number} 
            <button 
                type="delete" 
                onClick={() => {
                    if (window.confirm(`Delete ${person.name}?`)){
                        numService
                        .del(person.id)
                        .then(removed => {
                            setPersons(persons.filter(initPerson =>
                                initPerson.id !== person.id
                            ))
                        })
                    }
                }}>
                Delete
            </button>
        </div>
    )
}

export default Person