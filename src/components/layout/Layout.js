import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';

import Toolbar from '../navigation/toolbar/Toolbar'
import SideDrawer from '../navigation/sideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showSideDrawer: false
    }
    
    sideDrawerClosingHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerTogglerHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render () {
        return (
        <Aux>
            <Toolbar 
                drawerTogglerClicked={this.sideDrawerTogglerHandler} />
            <SideDrawer 
                showing={this.state.showSideDrawer} 
                closing={this.sideDrawerClosingHandler} />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
        )
    }  
};

export default Layout;