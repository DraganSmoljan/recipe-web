import React from 'react';
import getRecipe from '../../data/data';
import './search-bar.css'

function SearchBar () {
    return (
        <div>
            <input ></input>
            <button onClick={getRecipe}>Search</button>
        </div>
    );
} 

export default SearchBar;