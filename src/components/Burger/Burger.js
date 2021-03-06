import React from 'react';
import {withRouter} from 'react-router-dom';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
//get the prop.match.history from router

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)//arrays of keys
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {//take the number of element from Object
                return <BurgerIngredient key={igKey + i} type={igKey}/>;
            });
        });
    let transformedIngredientsLength = transformedIngredients.reduce((arr, el) => {
        return arr.concat(el);
    }, []).length;
    if (transformedIngredientsLength === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
};

export default withRouter(burger);
