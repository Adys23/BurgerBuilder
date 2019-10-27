import React from 'react';

import classes from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.less} disabled={props.disabled}>-</button>
        <span className={classes.Value}>{props.value}</span>
        <button className={classes.More} onClick={props.more}>+</button>
    </div>
);

export default buildControl;