import React from 'react';
import classes from './Backdrop.css';

const backdrop = (props) => (
    props.show ? <div onClick={props.clicked} className={classes.Backdrop}></div>:null
);

export default backdrop;