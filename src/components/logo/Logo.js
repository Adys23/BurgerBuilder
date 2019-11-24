import React from "react";

import logoImage from '../../assets/images/burger-logo.png'
import classes from "./Logo.module.css"

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height, marginBottom: props.margBottom}}>
        <img src={logoImage} alt="Burger Logo" />
    </div>
)

export default logo;