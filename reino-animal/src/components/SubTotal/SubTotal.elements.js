import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../../globalStyles';
export const SubTotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 150px;
    padding: 20px;
    background-color: #f3f3f3;
    border: 1px solid #dddddd;
    border-radius: 3px;

    @media screen and (max-width: 960px){
        width: 100%;
    }
`;

export const SubTotalCheckoutButtonLink = styled(Link)``;
export const SubTotalCheckoutButton = styled(Button)`
width: 100%;
`;