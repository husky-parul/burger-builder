import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = ( props ) => {
    const ingredientsSummary=Object.keys(props.ingredients)
        .map(igKey =>{
            return(
                <li key={igKey}>
                    <span style={{testTransfor: 'capitalize'}}> {igKey}</span>: {props.ingredients[igKey]}
                </li>);
        });
    return (
        <Aux>
            <h3>Your Orders</h3>
            <p>A delicious burder with following add-ons:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to checkout</p>
        </Aux>
    );

};

export default orderSummary;