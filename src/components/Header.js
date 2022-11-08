import React from 'react';
import { Link } from 'react-router-dom';
import {BsMoon, BsFillMoonFill} from 'react-icons/bs'
import { useTheme } from '../contexts/theme.context';

const Header = () => {
    const {darkTheme, handleChange} = useTheme()
    const handleClick = () => {
        handleChange()
    }
    return(
        <header>
            <Link to="/"><h1>Where in the world?</h1></Link>
            <button className='darkModeToggler' onClick={handleClick}>
                {!darkTheme? <BsMoon /> : <BsFillMoonFill />}
                <p>Dark Mode</p>
            </button>
        </header>
    )
}

export default Header;