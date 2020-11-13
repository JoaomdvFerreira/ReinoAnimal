import React from 'react';
import ProductSection from '../../components/ProductSection/ProductSection';
import { homeObjTwo } from './Data';

const Products = () => {
    return (
        <>
            <ProductSection {...homeObjTwo} />
        </>
    )
}

export default Products
