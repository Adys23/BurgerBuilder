import React from 'react';
import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.module.css';


const controls = [
    {label: 'Bacon', type: 'Bacon'},
    {label: 'Cheese', type: 'Cheese'},
    {label: 'Meat', type: 'Meat'},
    {label: 'Salad', type: 'Salad'}
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current price: <strong>{props.price.toFixed(2)} $</strong></p>
            {controls.map(ctrl =>(
                <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label} 
                    value={props.ingredientAmount[ctrl.type]}
                    more={() => props.ingredientAdded(ctrl.type)}
                    less={() => props.ingredientRemoved(ctrl.type)} 
                    disabled={props.disabled[ctrl.type]}
                    /> 
        ))}
            <button 
                className={classes.OrderButton} 
                disabled={!props.purchaseable}
                onClick={props.ordering}>
                    ORDER NOW
            </button>
        </div>
    )
    
};

export default buildControls;