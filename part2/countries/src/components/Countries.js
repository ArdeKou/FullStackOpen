import React from 'react'
import Country from './Country'

const Countries = ({ countries, filter, handleSearch }) => {

    //filter
    const countriesToShow = countries.filter(country =>
        country.name.toLowerCase()
        .includes(filter.toLowerCase())
        )

    //render
    const rows = () => countriesToShow.map(country => {
        if (countriesToShow.length > 1){
            return(
                 <Country
                    key={country.name}
                    country={country}
                    handleSearch={handleSearch}
                    detail={false}
                />
                
            )
        }
        else if (countriesToShow.length === 1){
            return (
                <Country 
                    key={country.name}
                    country={country}
                    detail={true}
                />
            )
        }
        else {
            return (
                null
            )
        }
    })

    if (filter === ''){
        return (
            null
        )
    }
    if (countriesToShow.length > 10){
        return (
            <div>
                Too many countries 
            </div>
        )
    }
    else{
        return (
            <div>
                {rows()}
            </div>
        )
    }
}

export default Countries