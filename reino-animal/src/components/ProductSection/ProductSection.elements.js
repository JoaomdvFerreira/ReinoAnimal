import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const ProdSection = styled.div`
padding: 30px 0;
`;

export const ProdSearchContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 15px 0;    
`;

export const ProdSearchBar = styled.input`
    padding: 14px 32px 14px 16px;
    border-radius: 4px 0 0 4px;
    border: 3px solid #101522;
    outline: none;
    width: 320px;
    background: transparent;
    color: black;
    height: 50px;
`;

export const ProdSearchBarIcon = styled.button`
    padding: 13px;
    border: 3px solid #101522;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    outline: none;
    background: #101522;
    color: #fff;
    text-transform: capitalize;
    height: 50px;
`;

export const ProdIcon = styled(FaSearch)`
    color: #fff;
    font-size: 20px;
`;

export const ProdItemsList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 40px;
    margin-top: 40px;
    margin-bottom: 40px;

    @media screen and (max-width: 1200px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;