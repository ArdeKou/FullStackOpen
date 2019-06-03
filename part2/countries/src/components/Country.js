import React, {useState} from 'react'
import axios from 'axios'
//import apixu api key from another file
import api_key from '../Secret.js'

const Country = ({ country, detail, handleSearch }) => {
    const [weather, setWeather] = useState('')

    const langs = () => (
        country.languages.map(language => {
            return (
                <li key={language.iso639_1}>
                    {language.name}
                </li>
            )
        })
    )

    axios
        .get(`https://api.apixu.com/v1/current.json?key=${api_key}&q=${country.name}`)
        .then(response => {
            setWeather(response.data)
        })

    if (!detail){
        return (
            <div>
                {country.name} <button type='button' onClick={handleSearch} value={country.name}>Show</button>
            </div>
        )
    }
    
    else {
        console.log(weather)
        return (
            <div>
                <h1>{country.name}</h1>
                <div>
                    Capital: {country.capital}
                    <br></br>
                    Population: {country.population}
                </div>
                <h3>Languages</h3>
                <ul>
                    {langs()}
                </ul>
                <div>
                    <img src={country.flag} alt="Flag" height="275" width="450"/>
                </div>
                <h3>Weather</h3>
                <div>
                    <strong>Temperature:</strong> {weather.current.temp_c} Celsius
                    <br></br>
                    <img src={weather.current.condition.icon} alt="weather" height="100" width="100"/>
                    <br></br>
                    <strong>Wind:</strong> {weather.current.wind_kph} kph direction {weather.current.wind_dir}
                </div>
            </div>
        )
    }
}

export default Country