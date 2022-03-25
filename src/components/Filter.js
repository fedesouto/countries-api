import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';

const Filter = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const {continentId} = useParams();

    return(
        <div className='dropdown'>
            <button className='dropdown-toggler' onClick={() => setShowDropdown(!showDropdown)}>{continentId?continentId.charAt(0).toLocaleUpperCase() + continentId.slice(1):"Filter by Region"}</button>
            <div className={'dropdown-content ' + (showDropdown&&'show')}>
                <ul>
                    <li><Link to="/continent/africa" onClick={() => setShowDropdown(!showDropdown)}>Africa</Link></li>
                    <li><Link to="/continent/americas" onClick={() => setShowDropdown(!showDropdown)}>Americas</Link></li>
                    <li><Link to="/continent/asia" onClick={() => setShowDropdown(!showDropdown)}>Asia</Link></li>
                    <li><Link to="/continent/europe" onClick={() => setShowDropdown(!showDropdown)}>Europe</Link></li>
                    <li><Link to="/continent/oceania" onClick={() => setShowDropdown(!showDropdown)}>Oceania</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Filter;