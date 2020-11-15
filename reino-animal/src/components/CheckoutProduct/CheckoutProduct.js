import React from 'react'
import {
    CheckoutItem,
    CheckoutItemInfo,
    CheckoutItemImage,
    CheckoutItemTitle,
    CheckoutItemDescription,
    CheckoutItemPrice,
    CheckoutItemButton
} from './CheckoutProduct.elements'
import { useStateValue } from '../../StateProvider'

const CheckoutProduct = ({ id, name, description, price, imageBase64 }) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <CheckoutItem>
            <CheckoutItemImage src={imageBase64} alt="test" />
            <CheckoutItemInfo>
                <CheckoutItemTitle>{name}</CheckoutItemTitle>
                <CheckoutItemDescription>{description}</CheckoutItemDescription>
                <CheckoutItemPrice>{price}€</CheckoutItemPrice>
                <CheckoutItemButton onClick={removeFromBasket}>Remove From Basket</CheckoutItemButton>
            </CheckoutItemInfo>
        </CheckoutItem>
    )
}

export default CheckoutProduct;
