import React from 'react';
import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' className={navData => navData.isActive ? classes.activeLink : classes.item}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' className={navData => navData.isActive ? classes.activeLink : classes.item}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' className={navData => navData.isActive ? classes.activeLink : classes.item}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' className={navData => navData.isActive ? classes.activeLink : classes.item}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings'className={navData => navData.isActive ? classes.activeLink : classes.item}>Settings</NavLink>
            </div>
        </nav>

    );
}
export default NavBar;