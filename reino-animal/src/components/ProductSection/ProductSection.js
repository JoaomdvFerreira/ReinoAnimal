import React, { useEffect, useState } from 'react';
import { Container } from '../../globalStyles';
import {
    ProdSection,
    ProdSearchContainer,
    ProdSearchBar,
    ProdSearchBarIcon,
    ProdIcon,
    ProdItemsList
} from './ProductSection.elements';

import Product from "../Product/Product";

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
                        products.map(({ id, name, description, price, imageBase64 }, index) => (
                            <Product key={index}
                                id={id}
                                name={name}
                                description={description}
                                price={price}
                                imageBase64={imageBase64}
                            />
                        ))
                    }
                </ProdItemsList>
            </Container>
        </ProdSection>
    )
}

export default ProductSection
