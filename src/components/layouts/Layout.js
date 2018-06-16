import React from 'react';
import AuxElement from '../../hoc/AuxElement';
import classes from './Layout.css';
import Toolbar from '../../components/toolbar/Toolbar';
const layout = ( props ) => {
    return (
     <AuxElement>
    <Toolbar />
     <main className = {classes.Content} >
         {props.children}
     </main>
     </AuxElement>

    );
}

export default layout;