import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../globalStyles';
import { InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, SubTitle, ImgWrapper, Img } from './InfoSection.elements';

const InfoSection = ({
    lightBg,
    imgStart,
    lightTopLine,
    lightText,
    lightTextDesc,
    primary,
    buttonLabel,
    description,
    headline,
    topLine,
    start,
    img,
    alt }) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                                <Link to='/'>
                                    <Button big fontBig primary={primary}>{buttonLabel}</Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection
