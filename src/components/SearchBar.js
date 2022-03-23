import React, {useState} from 'react';

const SearchBar = ({search, setSearch}) => {
    

    const handleChange = (evt) => {
        setSearch(evt.target.value)
    }

    return(
        <div className='search-bar'>
            <input placeholder='Search for a country...' onChange={handleChange}/>
        </div>
    )
}

export default SearchBar;