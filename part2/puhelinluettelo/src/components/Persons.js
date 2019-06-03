import React from 'react'
import Person from './Person'

const Persons = ({ persons, filter, delEvent }) => {

    //Filter
    const peopleToShow = persons.filter(person =>
        person.name.toLowerCase()
        .includes(filter.toLowerCase()))

    //Person render
    const renderPeople = () => peopleToShow.map(person =>   
        <Person key={person.name} person={person} delEvent={delEvent}/>
    )

    return (
        <div>
            {renderPeople()}
        </div>
    )
}

export default Persons