import React from 'react'

const Filter = ({filter, changeEvent}) => {
    return (
        <div>
            Filter: 
            <input
                filter={filter}
                onChange={changeEvent}
                
            />
        </div>
    )
}

export default Filter