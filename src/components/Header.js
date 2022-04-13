import React from 'react';
import { Link } from 'react-router-dom';
import {BsMoon, BsFillMoonFill} from 'react-icons/bs'

const Header = () => {
    return(
        <header>
            <Link to="/"><h1>Where in the world?</h1></Link>
            <div className='darkModeToggler'>
                <BsMoon />
                <p>Dark Mode</p>
            </div>
        </header>
    )
}

export default Header;