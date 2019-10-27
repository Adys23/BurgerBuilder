import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from "../../UI/Buttons/Button"

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    {igKey}: {props.ingredients[igKey]}
                </li>
            );
        });

    return (
        <Aux>
            <h3>Your order:</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)}$</strong></p>
            <p>Continue to checkout?</p>
            <Button
                btnType = "Danger"
                clicked = {props.purchaseCancelled}
            >
                Cancel
            </Button>
            <Button
                btnType = "Success"
                clicked = {props.purchaseContinued}
            >
                Continue
            </Button>
        </Aux>
    );
};

export default orderSummary;