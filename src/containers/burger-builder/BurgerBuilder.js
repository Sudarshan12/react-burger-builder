import React, {Component} from 'react';
import AuxElement from '../../hoc/AuxElement';
import Burger from '../../components/burger/Burger';
import BuildControls from '../../components/burger/build-controls/BuildControls';
import Modal from '../../components/ui/modal/Modal';
import OrderSummary from '../../components/burger/order-summary/OrderSummary'

const INGREDIENTS_PRICE = {
    salad:0.5,
    cheese:0.3,
    bacon:2,
    meat:2,
};
class BurgerBuilder extends Component{
    state={
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice:1.5,
        purchasable:false,
        purchasing:false,
    };
    purchaseHandler = () => {
        this.setState({purchasing:true});
    }
    puchaseCancelHandler = () => {
        this.setState({purchasing:false})
    };
    purchaseContinueHandler = () => {
        alert('Your burger is delivered!');
    }
    updatePurchasableState(ingredients){
        //const ingredients = {...this.state.ingredients};
        const sum = Object.keys(ingredients)
        .map((item) => { return ingredients[item]; })
        .reduce((sum,ele) => {
            return sum+ ele;
        },0 );
        this.setState({purchasable: sum>0});            
    }
    addIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount < 3){
            const updateCount = oldCount+1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updateCount;
            const priceAddition = INGREDIENTS_PRICE[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice + priceAddition;
            const updatedPrice = newPrice;
            this.setState({totalPrice:updatedPrice,ingredients:updatedIngredients});
            this.updatePurchasableState(updatedIngredients);
        }
    }
    
    removeIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount > 0){
            const updateCount = oldCount-1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updateCount;
            const priceDeduction = INGREDIENTS_PRICE[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceDeduction;
            const updatedPrice = newPrice;
            this.setState({totalPrice:updatedPrice,ingredients:updatedIngredients});
            this.updatePurchasableState(updatedIngredients);
        }
    } 
    
    
    render(){
        const disableOrEnable = {
            ...this.state.ingredients
        };   
        for ( let key in disableOrEnable){
            disableOrEnable[key] = disableOrEnable[key]<=0;
        }
        return (
            <AuxElement>
            <Modal show={this.state.purchasing} modalClosed={this.puchaseCancelHandler}>
            <OrderSummary ingredients = {this.state.ingredients} 
            purchaseCancelled={this.puchaseCancelHandler} 
            purchaseContinue={this.purchaseContinueHandler} totalPrice={this.state.totalPrice}
            /></Modal>   
            <Burger ingredients = {this.state.ingredients}/>
            <BuildControls
            ingredientsAdded={this.addIngredientsHandler}
            ingredientsRemoved={this.removeIngredientsHandler} 
            disabled={disableOrEnable}
            totalPrice={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
            />
            </AuxElement>
        );
    }
    
}

export default BurgerBuilder;