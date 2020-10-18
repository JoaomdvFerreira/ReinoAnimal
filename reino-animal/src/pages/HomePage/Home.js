import React from 'react';
import { homeObjOne, homeObjTwo } from './Data';
import { InfoSection } from '../../components';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
        </>
    )
}

export default Home
