import React, {useState} from 'react';
import ReactDOM from 'react-dom';

//Button component
const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

//Header component
const Header = ({ text }) => <h1>{text}</h1>

//Statistics component
const Statistics = ({ text, value }) => {
    if (text === 'Positive' && value === 'NaN %'){
        return (
            <tr><td>No feedback given</td></tr>
        )
    }
    if (text === 'Average' && value === 0){
        return (
            <tr>
                <td>{text}</td>
                <td>{value}</td>
            </tr>
        )
    }
    if (value === 0 || !value) {
        return null
    }
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

//App
const App = () => {
    //button states
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    //clickhandlers
    const handleGoodClick = () => setGood(good + 1)
    const handleNeutralClick = () => setNeutral(neutral + 1)
    const handleBadClick = () => setBad(bad + 1)

    return (
        <div>
            <div>
                <Header text={'Give feedback'}/>
                <Button handleClick={handleGoodClick} text='Good'/>
                <Button handleClick={handleNeutralClick} text='Neutral'/>
                <Button handleClick={handleBadClick} text='Bad'/>
                <Header text={'Statistics'}/>
            </div>
            <table>
                <tbody>
                    <Statistics text={'Good'} value={good}/>
                    <Statistics text={'Neutral'} value={neutral}/>
                    <Statistics text={'Bad'} value={bad}/>
                    <Statistics text={'All'} value={good + neutral + bad}/>
                    <Statistics text={'Average'} value={(((good * 1) + (bad * -1)) / (good + neutral + bad))}/>
                    <Statistics text={'Positive'} value={good / (good + neutral + bad) * 100 + ' %'}/>
                </tbody>
            </table>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
