import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetail = () => {

    const [country, setCountry] = useState();
    const { countryId } = useParams();

    useEffect(() => {
        fetch('https://restcountries.com/v2/alpha?codes=' + countryId.toLocaleLowerCase())
            .then(res => res.json())
            .then(json => setCountry(json))
    }, [countryId])

    if (!country) {
        return null;
    }

    const { flag, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders } = country[0];
    return (
        <div className='country-container'>
            <img src={flag}/>
            <div className='country-detail'>
                <h1>{name}</h1>
                <div className='country-info'>
                    <ul>
                        <li><b>Native Name: </b>{nativeName}</li>
                        <li><b>Population: </b>{population}</li>
                        <li><b>Region: </b>{region}</li>
                        <li><b>Sub Region: </b>{subregion}</li>
                        <li><b>Capital: </b>{capital}</li>
                        <li><b>Top Level Domain: </b>{topLevelDomain.map(i => i)}</li>
                        {/* <li><b>Currencies: </b>{currencies.map(i => i)}</li>
                        <li><b>Languages: </b>{languages.map(i => i)}</li> */}
                        
                    </ul>
                </div>
                <div>
                    <b>Border Countries: </b>
                        {borders.map( (border) => {
                            return(
                                <Link to={'/country/'+border}><button>{border}</button></Link>
                            )
                        }
                        )}
                    
                </div>
            </div>
        </div>
    )
}

export default CountryDetail;