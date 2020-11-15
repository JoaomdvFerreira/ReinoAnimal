import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import {
    SubTotalContainer,
    SubTotalCheckoutButtonLink,
    SubTotalCheckoutButton
} from './SubTotal.elements';

const SubTotal = () => {
    const [{ basket }] = useStateValue();

    return (
        <SubTotalContainer>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small>
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"€"}
            />
            <SubTotalCheckoutButtonLink to="/">
                <SubTotalCheckoutButton> Proceed to Checkout </SubTotalCheckoutButton>
            </SubTotalCheckoutButtonLink>
        </SubTotalContainer>
    )
}

export default SubTotal;
