import React, {useState} from 'react';
import ReactDOM from 'react-dom';

//Button component
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
)

//App
const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

    const handleRand = () => {
        //generate rand
        const rand = Math.floor((Math.random() * anecdotes.length))
        setSelected(rand)
    }

    const handleVote = () => {
        const copy = [...votes]
        copy[selected] += 1
        return (
            setVotes(copy)
        )    
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <strong>{props.anecdotes[selected]}</strong><br></br>
            Has {votes[selected]} votes
            <div>
                <Button handleClick={handleVote} text='Vote'/>
                <Button handleClick={handleRand} text='Next anecdote'/>
            </div>
            <h1>Anecdote with most votes</h1>
            <strong>{props.anecdotes[votes.indexOf(Math.max(...votes))]}</strong><br></br>
            Has {Math.max(...votes)} votes
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'));
