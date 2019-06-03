import React, { useState, useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons  from './components/Persons'
import numService from './services/numbers'
import Notification from './components/Notification'

const App = () => {
    //states
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNum, setNewNum] = useState('')
    const [filter, setFilter] = useState('')
    const [message, setMessage] = useState(null)
    const [msgStyle, setMsgStyle] = useState(null)

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

            setMessage(`Added ${personObj.name}`)
            setMsgStyle('Add')
            setTimeout(() => {
                setMessage(null)
                setMsgStyle(null)
            }, 5000)
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
                .catch(error => {
                    setMessage(`${newName} doesn't exist on the server`)
                    setMsgStyle('Err')
                    setTimeout(() => {
                        setMessage(null)
                        setMsgStyle(null)
                    }, 5000)
                })

                setMessage(`Edited ${personObj.name}`)
                setMsgStyle('Edit')
                setTimeout(() => {
                    setMessage(null)
                    setMsgStyle(null)
                }, 5000)

             }
            setNewName('')
            setNewNum('')
    }

    //Delete number
    const deletePerson = (person) => {
        if (window.confirm(`Delete ${person.name}?`)){
            numService
            .del(person.id)
            .then(removed => {
                setPersons(persons.filter(initPerson =>
                    initPerson.id !== person.id
                ))
            })
            .catch(error => {
                console.log(person.name)
                setMessage(`${person.name} doesn't exist on the server`)
                setMsgStyle('Err')
                setTimeout(() => {
                    setMessage(null)
                    setMsgStyle(null)
                }, 5000)
            })

            setMessage(`Deleted ${person.name}`)
            setMsgStyle('Del')
            setTimeout(() => {
                setMessage(null)
                setMsgStyle(null)
            }, 5000)
        }
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
            <Notification message={message} style={msgStyle}/>
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
                delEvent={deletePerson}
            />
        </div>
    )
}

export default App