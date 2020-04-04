import React from "react";
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "./ListItem.module.css";

import ItemImage from "./ItemImage.jsx";
import ItemDetailButton from "./ItemDetailButton.jsx";

const ListItem = props => {
    let isMatch = props.selCat == (props.recipe.category)

    if(isMatch)
    {
        return (
            <div className={styles.container}>
                <div id={styles.image}>
    			    <ItemImage url={props.recipe.img.url} title={props.recipe.title} />
		        </div>

                <div>
                    <p>{props.recipe.title}</p>
                    <p>{props.recipe.shortDesc}</p>
                    <p>
                    <Link to={`/item/${props.recipe.slug}`}>View Recipe</Link> 
				        {/* <ItemDetailButton recipe={props.recipe}/> */}
			        </p>
                </div>    
            </div>
        )
    }

    return null
}

ListItem.propTypes = {
    recipe: PropTypes.array.isRequired,
    selectedCategory: PropTypes.string.isRequired
};

export default ListItem;