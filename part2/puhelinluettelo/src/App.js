import React, { useState, useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons  from './components/Persons'
import axios from 'axios'

const App = () => {
    //states
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNum, setNewNum] = useState('')
    const [filter, setFilter] = useState('')

    //axios get persons from json server
    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
            })
    }, [])

    //add person eventhandler
    const addPerson = (event) => {
        event.preventDefault()
        const personObj = {
            name: newName,
            number: newNum
        }
        const personExists = persons.find(person => person.name === newName)
        if (!personExists) {
            setPersons(persons.concat(personObj))
            setNewName('')
            setNewNum('')

        }
        else
            alert(`${newName} already exists`)
    }

    //eventhandlers
    const handleNameChange = (event) => {
        setNewName(event.target.value)

    }

    
    const handleNumChange = (event) => {
        setNewNum(event.target.value)
    } 
    

    const handleFilter = (event) => {
        setFilter(event.target.value)
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <Filter 
                filter={filter} 
                changeEvent={handleFilter}
            />
            <h2>Add new</h2>
            <PersonForm
                onSubmit={addPerson}
                nameValue={newName}
                numValue={newNum}
                changeName={handleNameChange}
                changeNum={handleNumChange}
            />
            <h2>Numbers</h2>
            <Persons 
                persons={persons}
                filter={filter}
            />
        </div>
    )
    
}

export default App