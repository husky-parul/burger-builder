import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES={
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.9
}

class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0        },
        totalPrice: 4,
        purchaseable:false,
        orderingNow:false
    }

    purchaseCancelHandler = () => {
        this.setState({
            orderingNow:false
        });
    }

    purchaseContinueHandler = () => {
       alert('You continue!');
    }

    orderingNowHandler = () => {
        this.setState({
            orderingNow:true
        });
        console.log('I got clicked');
    }

    updatePurchaseHandler (ingredients) {
      const sum= Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey];
        })
        .reduce((sum,el) =>{
            return sum+el;
        },0);
        this.setState({purchaseable:sum>0});

    }

    addIngredientHandler = ( type ) => {
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount+1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        const pricdAddition=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+pricdAddition;
        this.setState({
            totalPrice:newPrice,
            ingredients:updatedIngredients
        });
        this.updatePurchaseHandler(updatedIngredients);   
        //console.log(updatedIngredients);                                                                                                       
    }

    removeIngredientHandler = ( type ) => {
        const oldCount=this.state.ingredients[type];
        if(oldCount<=0)
            return
     
        const updatedCount=oldCount-1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        const reducePrice=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-reducePrice;
        this.setState({
            totalPrice:newPrice,
            ingredients:updatedIngredients
        });
        this.updatePurchaseHandler(updatedIngredients);
    }

    render(){
        const disabledInfo={
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0
        }
        return (
            <Aux>
            
            <Modal show={this.state.orderingNow}
                modalClosed={this.purchaseCancelHandler}>
                <OrderSummary
                    ingredients={this.state.ingredients}
                    purchaseCanceld={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}/>
            </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    currentPrice={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    orderingNow={this.orderingNowHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;