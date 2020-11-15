import React from 'react'
import {
    ProdItem,
    ProdItemTitle,
    ProdItemDescription,
    ProdItemImage,
    ProdItemPrice,
    ProdItemButton
} from './Product.elements';
import { useStateValue } from "../../StateProvider";

const Product = ({ id, name, description, price, imageBase64 }) => {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                name: name,
                description: description,
                price: price,
                imageBase64: imageBase64,
            }
        })
    }

    return (
        <>
            <ProdItem>
                <ProdItemTitle>{name}</ProdItemTitle>
                <ProdItemDescription>{description}</ProdItemDescription>
                <ProdItemImage src={imageBase64} alt="test" />
                <ProdItemPrice>{price}€</ProdItemPrice>
                <ProdItemButton onClick={addToBasket}>Add to Basket</ProdItemButton>
            </ProdItem>
        </>
    )
}

export default Product
