import React, {useState} from 'react';

const Filter = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    return(
        <div className='dropdown'>
            <button className='dropdown-toggler' onClick={() => setShowDropdown(!showDropdown)}>Filter by Region</button>
            <div className={'dropdown-content ' + (showDropdown&&'show')}>
                <ul>
                    <li>Africa</li>
                    <li>America</li>
                    <li>Asia</li>
                    <li>Europe</li>
                    <li>Oceania</li>
                </ul>
            </div>
        </div>
    )
}

export default Filter;