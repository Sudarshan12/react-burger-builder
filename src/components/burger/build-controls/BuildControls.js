import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './build-control/BuildControl';
const controls = [
    {label:'Salad',type:'salad'},
    {label:'Cheese',type:'cheese'},
    {label:'Bacon',type:'bacon'},
    {label:'meat',type:'meat'}
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}> 
        <p>Total Price:<span>&#36;</span>
        <strong> {props.totalPrice.toFixed(2)}</strong></p>
        {controls.map(ctrl => (<BuildControl key={ctrl.label} 
        ingredientLabel={ctrl.label} 
        added={() => props.ingredientsAdded(ctrl.type)}
        removed={() => props.ingredientsRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
        /> ))}
        <button className={classes.OrderButton} onClick={props.ordered} disabled={!props.purchasable}>Order Now</button>
        </div>);
    }
    
    export default buildControls;