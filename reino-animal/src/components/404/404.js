import React from 'react'
import { Container, Wrapper } from '../../globalStyles';
import Img404 from '../../images/svg-9.svg';
import { Img } from './404.elements';

const NotFound = () => {
    return (
        <Container>
            <Wrapper>
                <Img src={Img404} alt='404 page' />
            </Wrapper>
        </Container>
    )
}

export default NotFound;
