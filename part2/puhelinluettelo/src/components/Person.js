import React from 'react'

const Person = ({ person, delEvent }) => {
    return (
        <div>
            {person.name} {person.number} 
            <button 
                type="delete" 
                onClick={() => delEvent(person)}>
                Delete
            </button>
        </div>
    )
}

export default Person