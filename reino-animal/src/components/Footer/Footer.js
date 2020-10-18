import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaPaw } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIconLink,
    SocialIcons
} from "./Footer.elements";

const Footer = () => {

    const toggleHome = () => scroll.scrollToTop();
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Lorem Ipsum</FooterLinkTitle>
                            <FooterLink to="/signin">Lorem Ipsum</FooterLink>
                            <FooterLink to="/signin">Lorem Ipsum</FooterLink>
                            <FooterLink to="/signin">Lorem Ipsum</FooterLink>
                            <FooterLink to="/signin">Lorem Ipsum</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Lorem Ipsum</FooterLinkTitle>
                            <FooterLink to="/signin">Lorem Ipsum</FooterLink>
                            <FooterLink to="/signin">Lorem Ipsum</FooterLink>
                            <FooterLink to="/signin">Lorem Ipsum</FooterLink>
                            <FooterLink to="/signin">Lorem Ipsum</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Lorem Ipsum</FooterLinkTitle>
                            <FooterLink to="/signin">Lorem Ipsum</FooterLink>
                            <FooterLink to="/signin">Lorem Ipsum</FooterLink>
                            <FooterLink to="/signin">Lorem Ipsum</FooterLink>
                            <FooterLink to="/signin">Lorem Ipsum</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Lorem Ipsum</FooterLinkTitle>
                            <FooterLink to="/signin">Lorem Ipsum</FooterLink>
                            <FooterLink to="/signin">Lorem Ipsum</FooterLink>
                            <FooterLink to="/signin">Lorem Ipsum</FooterLink>
                            <FooterLink to="/signin">Lorem Ipsum</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/"
                            onClick={toggleHome}
                            spy="true"
                            smooth="true"
                            offset={-80}
                            duration={1000}>
                            <FaPaw />
                        </SocialLogo>
                        <WebsiteRights>João Ferreira © {new Date().getFullYear()} All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
