import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/toolbar/Toolbar';
const layout = ( props ) => {
    return (
     <Aux>
    <Toolbar />
     <main className = {classes.Content} >
         {props.children}
     </main>
     </Aux>

    );
}

export default layout;