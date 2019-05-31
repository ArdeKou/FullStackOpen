import React from 'react'

const Total = ({ parts }) => {
    const total = parts.reduce(
        (prev, cur) => prev + cur.exercises, 0
    )

    return (
        <div>
            <p>Number of exercises {total}</p>
        </div>
    )
}

export default Total