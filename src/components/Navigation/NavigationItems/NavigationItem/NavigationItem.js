import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './NavigationItem.css';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        {/*NavLink will auto get css file but change the class name to a unique name.*/}
        {/*Therefore, need to use the activeClassName to set to the active class*/}
        <NavLink
            activeClassName={classes.active}
            exact={props.exact}
            to={props.link}>
            {props.children}
        </NavLink>
    </li>
);


export default navigationItem;
