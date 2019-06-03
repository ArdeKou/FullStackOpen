import React from 'react'

const Search = ({ search, onChange }) => {

    return (
        <div>
            Find Countries <input value={search} onChange={onChange} />
        </div>
    )
}

export default Search