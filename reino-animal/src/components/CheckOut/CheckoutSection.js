import React from 'react'
import { Container, Wrapper } from '../../globalStyles'
import SubTotal from '../SubTotal/SubTotal';
import {
    CheckoutContainer,
    CheckoutLeftSide,
    CheckoutRightSide,
    CheckoutItemList,
} from './Checkout.elements';

import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../../StateProvider';

const CheckoutSection = () => {
    const [{ basket }] = useStateValue();

    return (
        <Container>
            <Wrapper>
                <CheckoutContainer>
                    <CheckoutLeftSide>
                        <CheckoutItemList>
                            {basket.map((item, index) => (
                                <CheckoutProduct key={index}
                                    id={item.id}
                                    name={item.name}
                                    description={item.description}
                                    price={item.price}
                                    imageBase64={item.imageBase64}
                                />
                            ))}
                        </CheckoutItemList>
                    </CheckoutLeftSide>
                    <CheckoutRightSide>
                        <SubTotal />
                    </CheckoutRightSide>
                </CheckoutContainer>
            </Wrapper>
        </Container>
    )
}

export default CheckoutSection
