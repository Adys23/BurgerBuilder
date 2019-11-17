import React from 'react';

import Classes from './Toolbar.module.css'

import Logo from '../../logo/Logo'
import NavigationItems from '../navigationItems/NavigationItems'

const toolbar = (props) => (
    <header className={Classes.Toolbar}> 
        <div>MENU</div>
        <Logo />
        <nav>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;