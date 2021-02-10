import React from 'react';


const Recipes = ({ label, calories, image }) => {
    return (
        <div>
            <h1>{label}</h1>
            <p>{calories}</p>
            <img src={image} alt="chicken"/>
        </div>
    );
}

export default Recipes;