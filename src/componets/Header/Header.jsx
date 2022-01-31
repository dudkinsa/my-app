import React from 'react';
import classes from './Header.module.css';

const Header = () =>{
    return(
        <header className={classes.header}>
            <img
                src='https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg' alt = 'lake'/>
        </header>
    );
}
export default Header;