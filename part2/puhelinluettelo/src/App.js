import React, { useState, useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons  from './components/Persons'
import numService from './services/numbers'

const App = () => {
    //states
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNum, setNewNum] = useState('')
    const [filter, setFilter] = useState('')

    //database getAll
    useEffect(() => {
        numService
            .getAll()
            .then(initialNums => {
                setPersons(initialNums)
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
            numService
                .create(personObj)
                .then(returnedNum => {
                    setPersons(persons.concat(returnedNum))
                })
            setNewName('')
            setNewNum('')
        }
        else
            if(window.confirm(`${newName} is already added to the phonebook, would you like to update the number`)){
                numService
                .update((persons.find(person => person.name === personObj.name)).id, personObj)
                .then(updated => {
                    setPersons(persons.filter(person => person.name !== updated.name).concat(updated))
                })
                
             }
            setNewName('')
            setNewNum('')
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
                setPersons={setPersons}
            />
        </div>
    )
}

export default App
