import React from 'react';

const SearchError = ({search}) => {
    return(
        <div className='search-error'>
            <h2>Sorry, no matches found for <em>{search}</em>.</h2>
        </div>
    )
}

export default SearchError;