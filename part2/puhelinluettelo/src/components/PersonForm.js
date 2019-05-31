import React from 'react'

const PersonForm = ({onSubmit, nameValue, numValue, changeName, changeNum}) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                Name: <input
                    value={nameValue}
                    onChange={changeName}
                />
            </div>
            <div>
                Number: <input
                    value={numValue}
                    onChange={changeNum}
                />
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
    )
}

export default PersonForm