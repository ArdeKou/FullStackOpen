import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Search from './components/Search'
import Countries from './components/Countries'

function App() {
  //state hooks
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  //search eventhandler
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  //api get
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  
  return (
    <div>
      <Search search={search} onChange={handleSearch} />
      <Countries countries={countries} filter={search} handleSearch={handleSearch} />
    </div>
  );
}

export default App;