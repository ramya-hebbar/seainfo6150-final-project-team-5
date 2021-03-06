import React from "react";
import { Link } from 'react-router-dom';


const HealthyRecipe = props => {
    return (
        <html>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </head>
            <div class ="container">
                <img class = "listImage" src={props.HealthyRecipes.img.url} alt="image"/>
                    <h1 class="name"> {props.HealthyRecipes.title} </h1>

                     <p> <Link class ="recipeLink" to={`/item/${props.HealthyRecipes.slug}`}> View Recipe ></Link> </p> 
             
            </div>
        </html>
    );
};

export default HealthyRecipe;