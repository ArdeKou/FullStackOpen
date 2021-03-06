import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {
    const rows = () => parts.map(part =>
        <Part
            key={part.id}
            part={part}
        />

    )
    return (
        <div>
            {rows()}
        </div>
    )
}

export default Content