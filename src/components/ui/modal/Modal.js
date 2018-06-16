import React from 'react';
import classes from './Modal.css';
import AuxElement from '../../../hoc/AuxElement'
import Backdrop from '../backdrop/Backdrop';
const modal = (props) => ( 
    <AuxElement>
    <Backdrop show={props.show} clicked={props.modalClosed} /> 
    <div className={classes.Modal} style={
        {transform: props.show ? 'translateY(0)':'translateY(-100vh)',
        opacity: props.show? '1':'0'
    }
}>
{props.children}
</div>
</AuxElement>)
export default modal;