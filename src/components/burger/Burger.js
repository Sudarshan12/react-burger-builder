import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './burger-ingredient/BurgerIngredient';
const burger = (props) => {
let ingredientsArray = Object.keys(props.ingredients)
                        .map((item) => {
                            return [...Array(props.ingredients[item])].map((_,currentQuantity) => {
                                return <BurgerIngredient type = {item} key = {item+currentQuantity} />
                            } );
                        }).reduce((arr,ele) => {
                            return arr.concat(ele);
                        },[]) ;
    if(ingredientsArray.length === 0){
        ingredientsArray = <p> Please add atleast 1 ingredient </p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type = "bread-top"/>
            {ingredientsArray}
            <BurgerIngredient type = "bread-bottom"/>
        </div>
    );
};

export default burger;