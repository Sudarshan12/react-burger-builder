import React from "react";
import AuxElement from '../../../hoc/AuxElement';
import Button from '../../ui/button/button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (<li key={igKey}>
            <span style={{textTransform:'captilize'}}> {igKey}: {props.ingredients[igKey]} </span>
            </li>);
        });
        
        return (<AuxElement>
            <h3>Your Order</h3>
            <p> A delicious burger with following ingredients: </p>
            <ul>
            {ingredientSummary}
            </ul>
            <p>Total Price: <span>&#36;</span> <bold>{props.totalPrice}</bold></p>
            <p>Checkout</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>Checkout</Button>
            </AuxElement>);
        };
        
export default orderSummary;        