import React, {useState} from 'react';
import {BsSearch} from 'react-icons/bs'

const SearchBar = ({search, setSearch}) => {
    

    const handleChange = (evt) => {
        setSearch(evt.target.value)
    }

    return(
        <div className='search-bar'>
            <BsSearch />
            <input placeholder='Search for a country...' onChange={handleChange}/>
        </div>
    )
}

export default SearchBar;