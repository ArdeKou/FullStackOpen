import React from 'react'
import Person from './Person'

const Persons = ({ persons, filter, setPersons }) => {

    //Filter
    const peopleToShow = persons.filter(person =>
        person.name.toLowerCase()
        .includes(filter.toLowerCase()))

    //Person render
    const renderPeople = () => peopleToShow.map(person =>   
        <Person key={person.name} person={person} persons={persons} setPersons={setPersons}/>
    )

    return (
        <div>
            {renderPeople()}
        </div>
    )
}

export default Persons