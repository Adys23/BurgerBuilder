import React from 'react';

import Logo from '../../logo/Logo';
import NavigationItems from '../navigationItems/NavigationItems';

import Classes from './SideDrawer.module.css'

const sideDrawer = (props) => {

    return (
        <div className={Classes.SideDrawer}>
            <Logo height="9%" />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default sideDrawer;