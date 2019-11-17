import React from 'react';

import Logo from '../../logo/Logo';
import NavigationItems from '../navigationItems/NavigationItems';

import Classes from './SideDrawer.module.css'

const sideDrawer = (props) => {

    reutrn (
        <div className={Classes.SideDrawer}>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default sideDrawer;