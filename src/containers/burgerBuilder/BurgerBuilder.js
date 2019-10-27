import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/burger/Burger';
import BuildControls from '../../components/burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    Salad: 0.5,
    Cheese: 0.7,
    Meat: 2,
    Bacon: 1.5
};

class BurgerBuilder extends Component {

    // constructor(props) {
    //     super(props);

    // }

    state = {
        ingredients: {
            Bacon: 0,
            Cheese: 0,
            Meat: 0,
            Salad: 0
        },
        totalPrice: 4.0,
        ifCanBeBought: false,
        ifOrdering: false
    }

    canBeBought (ingredients) {
        const sumOfIngredients = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ifCanBeBought: sumOfIngredients > 0})
    }

    purchaseHandler = () => {
        this.setState({ifOrdering: true})
    }

    closingModalHandler = () => {
        this.setState({ifOrdering: false})
    }

    orderConfirmationHandler = () => {
        alert("Continued!")
    }

    addIngredientHandler= (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const updatedPrice = this.state.totalPrice + priceAddition;
        this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients});
        this.canBeBought(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount > 0) {
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount;
            const priceDeduction = INGREDIENT_PRICES[type];
            const updatedPrice = this.state.totalPrice - priceDeduction;
            this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients});
            this.canBeBought(updatedIngredients);
        } else  {return};
        
    };

    render() {
        const disabledButtons = {
            ...this.state.ingredients
        };
        for (let key in disabledButtons) {
            disabledButtons[key] = disabledButtons[key] <= 0
        }

        return (
            <Aux>
                <Modal show={this.state.ifOrdering} closingModal={this.closingModalHandler}>
                    <OrderSummary
                        price={this.state.totalPrice}
                        ingredients={this.state.ingredients}
                        purchaseCancelled={this.closingModalHandler}
                        purchaseContinued={this.orderConfirmationHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    ingredientAmount={this.state.ingredients} 
                    disabled={disabledButtons}
                    price={this.state.totalPrice}
                    purchaseable={this.state.ifCanBeBought}
                    ordering={this.purchaseHandler}/>
            </Aux>
        );
    };
};

export default BurgerBuilder;