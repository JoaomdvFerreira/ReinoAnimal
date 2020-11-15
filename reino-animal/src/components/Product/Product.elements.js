import styled from 'styled-components';
import { Button } from '../../globalStyles';
export const ProdItem = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    @media screen and (max-width: 960px){
        max-width: 400px;
    }
`;

export const ProdItemTitle = styled.h3`

`;

export const ProdItemDescription = styled.p`

`;

export const ProdItemPrice = styled.p`

`;

export const ProdItemImage = styled.img`

`;

export const ProdItemButton = styled(Button)``;