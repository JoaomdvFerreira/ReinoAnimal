import styled from 'styled-components';
import { Button } from '../../globalStyles';
export const CheckoutItem = styled.div`
    display:flex;
    flex-direction: row;

    @media screen and (max-width: 960px){
        flex-direction: column;
        margin-bottom: 20px;
    }
`;
export const CheckoutItemInfo = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
export const CheckoutItemImage = styled.img`
    padding: 20px;
    object-fit: contain;
`;

export const CheckoutItemTitle = styled.h3`

`;

export const CheckoutItemDescription = styled.p`

`;

export const CheckoutItemPrice = styled.span`

`;

export const CheckoutItemButton = styled(Button)`

`;

