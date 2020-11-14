import React, { useEffect, useState } from 'react';
import { Container } from '../../globalStyles';
import {
    ProdSection,
    ProdSearchContainer,
    ProdSearchBar,
    ProdSearchBarIcon,
    ProdIcon,
    ProdItemsList,
    ProdItem,
    ProdItemTitle,
    ProdItemDescription,
    ProdItemImage,
    ProdItemPrice,
    ProdItemButton
} from './ProductSection.elements';

import axios from '../../axios';

const ProductSection = () => {
    const [products, setProducts] = useState([]);

    const getProductList = () => {
        axios.get('/get/productList').then((res) => {
            setProducts(res.data);
        })
    }

    useEffect(() => {
        getProductList();
        console.log(products)
    }, [])

    return (
        <ProdSection>
            <Container>
                <ProdSearchContainer>
                    <ProdSearchBar type="text" placeholder="Type your search here" />
                    <ProdSearchBarIcon>
                        <ProdIcon />
                    </ProdSearchBarIcon>
                </ProdSearchContainer>
                <ProdItemsList>
                    {
                        products.map(({ name, description, price, imageBase64 }, index) => (
                            <ProdItem key={index}>
                                <ProdItemTitle>{name}</ProdItemTitle>
                                <ProdItemDescription>{description}</ProdItemDescription>
                                <ProdItemImage src={imageBase64} alt="test" />
                                <ProdItemPrice>{price}€</ProdItemPrice>
                                <ProdItemButton>Buy Now</ProdItemButton>
                            </ProdItem>
                        ))
                    }
                </ProdItemsList>
            </Container>
        </ProdSection>
    )
}

export default ProductSection
